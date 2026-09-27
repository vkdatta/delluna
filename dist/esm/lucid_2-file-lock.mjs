export const name="lucid_2-file-lock";
export const id="dl_6e24ab43d1984c358f51";
export const url=new URL("../icons/lucid_2-file-lock.svg?v=420a0f89bd5de26455b0669c5dca5c01f2ab86e8952cc3d3a06b4207595afc6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
