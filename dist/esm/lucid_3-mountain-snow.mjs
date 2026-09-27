export const name="lucid_3-mountain-snow";
export const id="dl_78dfd9f7651c42f5add0";
export const url=new URL("../icons/lucid_3-mountain-snow.svg?v=0d16c8249ff197b6141005f65c3842cb7b921781119130a20d26f0425c1b828c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
