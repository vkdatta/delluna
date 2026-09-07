export const name="number-six-light";
export const id="dl_119599d0862d45ffa48b";
export const url=new URL("../icons/number-six-light.svg?v=4b0e3c3a19a241bddef9604ea18b6af119c3fab1f0acd0a70a13a0fd42300783",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
