/*
** Nouvel objet :
**
** tab[x] = fonction_objet(core,
** [tableau de couleur + transparence(0-10) + reflexion(0-2) + brillance(0-2+)]
** [tableau de position + numéro de l'objet + angle ou rayon]
** [tableau de rotation + limite(haute/basse)]);
**
** fonctions : sphere (rayon) / plan (0) / cylindre (rayon) / cone (angle) / ellyps(rayon)
** core : structure générale
*/

function list_object2(core, tab, c)
{
    return (tab);
}

function list_object(core, tab, c)
{
    tab[c] = sphere(core, [227, 114, 0, 100, 2, 0.3],
		    [-300, 200, 200, c, 110], [0, 0, 0, null]);
    tab[++c] = sphere(core, [30, 140, 250, 100, 2, 0.3], 
		      [-100, 200, -200, c, 50], [0, 0, 0, null]);
    tab[++c] = sphere(core, [250, 67, 10, 1, 0, 0.5],
		      [-500, 200, -200, c, 110], [0, 0, 0, null]);
    tab[++c] = sphere(core, [30, 30, 30, 100, 2, 0.5],
		      [0, 0, 0, c, 110], [0, 0, 0, null]);
    tab[++c] = plan(core, [57, 213, 0, 100, 0, 1],
		    [0, -100, 0, c, 0], [90, 0, 0, null]);
    tab[++c] = plan(core, [219, 50, 196, 100, 0, 0],
		    [600, 0, 0, c, 0], [0, 0, 0, null]);
    tab[++c] = cylindre(core, [0, 145, 230, 100, 0, 0.9],
			[0, 200, -400, c, 70], [30, 30, 0, null, null]);
    tab[++c] = cone(core, [100, 0, 212, 100, 0, 0.5],
		    [-300, 400, 400, c, 50], [90, 0, 0, 0, null]);
    tab[++c] = ellyps(core, [165, 168, 2, 100, 0, 1],
		      [-100, 200, 200, c, 100], [0, 0, 0, null]);
    tab = list_object2(core, tab, c);
    return (tab);
}
