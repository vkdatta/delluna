export const name="flowchart-fill";
export const id="dl_65c05be5b1b8884298ad";
export const url=new URL("../icons/flowchart-fill.svg?v=88d80afa8af270b119937b9fccf4e5b8811ef2eef9a9c2ae09e48ab30ac70039",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
