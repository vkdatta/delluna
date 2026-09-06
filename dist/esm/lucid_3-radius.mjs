export const name="lucid_3-radius";
export const id="dl_ad55a1a92fab4a2ea7f9";
export const url=new URL("../icons/lucid_3-radius.svg?v=4f96dc0fb444ec7fc57c523a11f8c8341829147b6293e2d7141fa6bf2c76e40c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
