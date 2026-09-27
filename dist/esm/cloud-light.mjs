export const name="cloud-light";
export const id="dl_e5806d8f63874e2c9c43";
export const url=new URL("../icons/cloud-light.svg?v=f36ce35260874ce0c8d708fb94a69907fc13cfb768c561047ded6c34da1e63b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
