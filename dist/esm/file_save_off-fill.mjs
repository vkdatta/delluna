export const name="file_save_off-fill";
export const id="dl_1c5819e9962dc6c69f56";
export const url=new URL("../icons/file_save_off-fill.svg?v=8fec28fef1a1ef642c11c6a202a1a2c98420ef8caa5d2229c2263a9bb9b19982",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
