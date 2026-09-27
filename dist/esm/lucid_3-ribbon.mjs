export const name="lucid_3-ribbon";
export const id="dl_3b3f3d22b4f64529b3dd";
export const url=new URL("../icons/lucid_3-ribbon.svg?v=edbedd1c3e6bacf5a589ee8308e5784e64b11198a1ea2c1f6bc7c84127c78b0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
