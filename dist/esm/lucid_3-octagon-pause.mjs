export const name="lucid_3-octagon-pause";
export const id="dl_07d9e5076b7f49b5abec";
export const url=new URL("../icons/lucid_3-octagon-pause.svg?v=46da2945a01d0f7aab20e99fee14d90b50a75b0bfdfe086b2c6f7d5adba05eb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
