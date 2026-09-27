export const name="developer_guide-fill";
export const id="dl_0edf3a4ef8a82b27623d";
export const url=new URL("../icons/developer_guide-fill.svg?v=459201f1f8573e19ff74dfd64aafd1c9e028e96f7e9f871c47c20335761c336d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
