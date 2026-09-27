export const name="lucid_3-pause";
export const id="dl_ffc28bfc15ae41bb8139";
export const url=new URL("../icons/lucid_3-pause.svg?v=3819801d845a20ef54eaf79568e47de017a17ba90fb3c22e2e39e0d64470d63d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
