export const name="variables";
export const id="dl_64da56d7401352ddc6b8";
export const url=new URL("../icons/variables.svg?v=41430571b0fde633d072c56aa570b12bee11117666ccef3c1e13b7e0cb9482c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
