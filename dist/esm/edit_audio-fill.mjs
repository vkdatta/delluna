export const name="edit_audio-fill";
export const id="dl_82224fe6cc8c45f7b22b";
export const url=new URL("../icons/edit_audio-fill.svg?v=cc06167a0f9769776443e666cec74b0fb06a6447264d9cf0ba556e9e2ee2ad26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
