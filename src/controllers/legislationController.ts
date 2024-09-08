import { Request, Response } from 'express';
import Legislation from '../models/Legislation';
import ConservationProcess from '../models/ConservationProcess';

export const createLegislation = async (req: Request, res: Response) => {
  try {
    const { name, official_language, conservation_process } = req.body;

    const newLegislation = await Legislation.create({ name, official_language });

    // Vincular processos de conservação e simbologias
    for (const process of conservation_process) {
      const processExists = await ConservationProcess.findByPk(process.id_process);
      if (!processExists) {
        return res.status(400).json({ error: 'Processo não encontrado' });
      }
      // Lógica para vincular simbologias aqui
    }

    return res.status(201).json(newLegislation);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar legislação' });
  }
};

export const getLegislations = async (_: Request, res: Response) => {
  const legislations = await Legislation.findAll();
  return res.json({ legislations });
};
