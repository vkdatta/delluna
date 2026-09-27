export const name="lucid_2-copy-slash";
export const id="dl_b3c582f90c5849a2a14b";
export const url=new URL("../icons/lucid_2-copy-slash.svg?v=95fe17522d0a584c5282283ad57b5521b9ca4e985a43fdf88fc90453bc39f4e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
