export const name="toggle-left-light";
export const id="dl_baaf973f01e44f8c8998";
export const url=new URL("../icons/T/toggle-left-light.svg?v=b5c4bc4d654fe320677d3d8be83ea1395626a74e328389dcfe86256039c216b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
