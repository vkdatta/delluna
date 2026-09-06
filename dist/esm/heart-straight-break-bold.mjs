export const name="heart-straight-break-bold";
export const id="dl_e062ddaf380341d6aa8d";
export const url=new URL("../icons/heart-straight-break-bold.svg?v=f89cc97d312fcc21ea94cf46da441a09e018754cb26239590001c5735ae60dbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
