export const name="number-circle-one-thin";
export const id="dl_54c9839280eb4b73bc23";
export const url=new URL("../icons/number-circle-one-thin.svg?v=66294c83b65c8ec3fdf484b802195612bed5aba10b4e3918721295a34dc7370b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
