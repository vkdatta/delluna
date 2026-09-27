export const name="lucid_3-monitor-off";
export const id="dl_66f21ad6132846a38e0f";
export const url=new URL("../icons/lucid_3-monitor-off.svg?v=fc1b559451a11b6f5941e2fe9a14d9d57756e7d6d1271e85359b5109e5e51aa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
