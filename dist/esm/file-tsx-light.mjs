export const name="file-tsx-light";
export const id="dl_8c33f5bb360443bba181";
export const url=new URL("../icons/file-tsx-light.svg?v=f20e14b7cfc5d82b8fa6ef16ea0666eeff1a45602d08ddd2d2c5cdcb220acb68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
