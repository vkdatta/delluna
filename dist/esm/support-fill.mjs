export const name="support-fill";
export const id="dl_54bed06f0158d71926db";
export const url=new URL("../icons/support-fill.svg?v=febb8852dc5246d1d6604c34cb5a5712609381df3b50bb08981cbfaa7eec9c20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
