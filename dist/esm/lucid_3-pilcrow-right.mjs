export const name="lucid_3-pilcrow-right";
export const id="dl_c48607d8e5a14960a476";
export const url=new URL("../icons/lucid_3-pilcrow-right.svg?v=60e04ab9ad935537e3252e7559322e2c6e1b0b36d1d33d452b827cd313680655",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
