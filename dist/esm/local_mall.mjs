export const name="local_mall";
export const id="dl_21065f96350b2c80b11e";
export const url=new URL("../icons/local_mall.svg?v=5a0756c8a6d4bb4057cbe71b61d576bd48f3602567309a9d4d555eabbff0a128",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
