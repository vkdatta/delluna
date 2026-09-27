export const name="lucid_3-rose";
export const id="dl_94adbab717014cb0a3cf";
export const url=new URL("../icons/lucid_3-rose.svg?v=0cd36ccdd668a993678925fe52da019ffa2faf85e8c1a5a7390fd918ecc7109f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
