export const name="file-x";
export const id="dl_2afdad43d99f4a3e8129";
export const url=new URL("../icons/file-x.svg?v=f27c09b92f424e1fdda308284ec89d528eb05e590bedab9a3ca021cd4594611f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
