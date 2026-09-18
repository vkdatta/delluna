export const name="routine";
export const id="dl_3865c8c4703447e4b8a6";
export const url=new URL("../icons/R/routine.svg?v=216baa2a1bc4be799e1caf24d8a0fa679358d4f384afb5ba7d8ec0dac8ffeb53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
