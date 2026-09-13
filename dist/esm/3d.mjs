export const name="3d";
export const id="dl_629e855ebda14f52a30f";
export const url=new URL("../icons/3/3d.svg?v=2dcd52aeac6a9cd6aaf963a4f7ae265bb5d0b82b765702fcfd973a2cbf7d0ceb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
