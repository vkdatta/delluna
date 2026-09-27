export const name="folder_eye-fill";
export const id="dl_777330ecd87f245cd71f";
export const url=new URL("../icons/folder_eye-fill.svg?v=c5b76fe3b6a737e2ab950e71d89f0af3ac98d9e6d0bedd704f9b45ce74a6afcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
