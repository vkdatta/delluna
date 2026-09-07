export const name="scales";
export const id="dl_a78f551055204b00a867";
export const url=new URL("../icons/S/scales.svg?v=0352fc7a9115929af431f42b12ffb3fbc5e23420a712bf4ec922ec1f591f870f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
