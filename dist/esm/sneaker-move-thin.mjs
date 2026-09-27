export const name="sneaker-move-thin";
export const id="dl_ca2ab064c32a54eb6eb3";
export const url=new URL("../icons/sneaker-move-thin.svg?v=de66366b27e271bbd3a3102580886e7b390ea3bd90ade5bc3d4ccd617729d7cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
