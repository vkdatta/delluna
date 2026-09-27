export const name="lucid_2-file-text";
export const id="dl_fce542604fc943e28ead";
export const url=new URL("../icons/lucid_2-file-text.svg?v=d04ad662c80975e1decfafaf90c7fa1e1cb2a2b66a99c654be700e73954111aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
