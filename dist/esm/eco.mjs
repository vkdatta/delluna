export const name="eco";
export const id="dl_f68587d6aec7b6908f44";
export const url=new URL("../icons/eco.svg?v=92850e8e07ef627e340a509f4a09e4ab3fc3c8b83ec9cee12da260c48c3d2ed3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
