export const name="view_comfy-fill";
export const id="dl_a37b3c8d1bbc4f04a0cf";
export const url=new URL("../icons/view_comfy-fill.svg?v=df00ef692b88598c358b06fe395963aaf3c22875cf9fb3fea235096f2127a56d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
