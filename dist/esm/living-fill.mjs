export const name="living-fill";
export const id="dl_66be4f612ffe446f8685";
export const url=new URL("../icons/L/living-fill.svg?v=2e844f01f0c9e24c6b53663d1df4060213f3cc7efd17b7dd5b567d589b75711b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
