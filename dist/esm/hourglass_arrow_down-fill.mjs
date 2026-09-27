export const name="hourglass_arrow_down-fill";
export const id="dl_bc5b324fa41b63d5850c";
export const url=new URL("../icons/hourglass_arrow_down-fill.svg?v=3e6f8d684bd9648906e373a65bf0fcac95c6c9b3ebd25ac1301ac7d8d65e6e63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
