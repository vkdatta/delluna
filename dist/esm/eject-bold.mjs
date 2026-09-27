export const name="eject-bold";
export const id="dl_327534cc95674ddbaac7";
export const url=new URL("../icons/eject-bold.svg?v=a17c15e76ba6c744922b90e56f808e7f77bacfd7c568727f122f9ffd76e1b1f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
