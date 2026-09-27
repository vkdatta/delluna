export const name="person-simple-run-thin";
export const id="dl_145e117c18104214b5d3";
export const url=new URL("../icons/person-simple-run-thin.svg?v=aedaf844a501f82c26610ba091e9176d0344e7d1ee10121d7b56d984db89a8fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
