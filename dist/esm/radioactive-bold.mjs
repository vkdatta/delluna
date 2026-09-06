export const name="radioactive-bold";
export const id="dl_b63cbf51ec5c4922af42";
export const url=new URL("../icons/radioactive-bold.svg?v=eab4914927ed2ee1590ec0c2df343fe6e195dcaa538ac685c2f603d530b118b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
