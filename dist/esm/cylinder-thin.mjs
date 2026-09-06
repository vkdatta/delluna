export const name="cylinder-thin";
export const id="dl_324344421e9546d4a181";
export const url=new URL("../icons/cylinder-thin.svg?v=719754462cb455821a78f90f19a1ab024e46e50038c5f2f192c2ca066e9be132",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
