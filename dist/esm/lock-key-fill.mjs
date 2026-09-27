export const name="lock-key-fill";
export const id="dl_772743babc7040558ac0";
export const url=new URL("../icons/lock-key-fill.svg?v=f28fd8ea9d2578ec74068f7a3e99e158e0564fe438cb164f31a0da55b5aa2237",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
