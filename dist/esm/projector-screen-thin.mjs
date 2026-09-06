export const name="projector-screen-thin";
export const id="dl_e4e73cd52c9c46d99076";
export const url=new URL("../icons/projector-screen-thin.svg?v=6a25e8c479f1413d5afbc5ac496c05c4d77d026defbbd4c498fb01e5f568bfa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
