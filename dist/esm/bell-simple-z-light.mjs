export const name="bell-simple-z-light";
export const id="dl_e5a5b91e510c47f2bc07";
export const url=new URL("../icons/bell-simple-z-light.svg?v=1c7f4c2d2ce329d6c18e1370d016cff28510e27ac8360e183b6bb8cd43ef8e16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
