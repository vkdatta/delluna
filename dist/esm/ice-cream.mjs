export const name="ice-cream";
export const id="dl_e04126a51de84615933f";
export const url=new URL("../icons/ice-cream.svg?v=79474be1aa74d55ec35561bae4706ef2c6b66592a73e46c0f288069058f0c456",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
