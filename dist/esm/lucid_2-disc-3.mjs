export const name="lucid_2-disc-3";
export const id="dl_0829e8c5c7f6419d888d";
export const url=new URL("../icons/lucid_2-disc-3.svg?v=56d87ad2e5b76977df1f2ab9ac1acd4b8602956e5d921217e9e9c6fa8aa75805",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
