export const name="text-cursor-input";
export const id="dl_520ff86bd8d948bd8b8d";
export const url=new URL("../icons/text-cursor-input.svg?v=c4f9dc7cb4f1cf5710d1236aa8512bacadfdd1d878f0b2cda9ee6388fab26055",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
