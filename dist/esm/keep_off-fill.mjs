export const name="keep_off-fill";
export const id="dl_42b97013ba7d287374d9";
export const url=new URL("../icons/keep_off-fill.svg?v=96a73dfd93caaf2e08918807ccb7cb6cc839f4997bd7cb7733a28c8d5e788e2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
