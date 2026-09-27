export const name="bathtub-duotone";
export const id="dl_4d6be7d041d74bd195f5";
export const url=new URL("../icons/bathtub-duotone.svg?v=7f489420a4e779cc0f6d37e97c52f49f85789f9870aefef4cb90e5479f67d61f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
