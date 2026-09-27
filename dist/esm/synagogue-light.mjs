export const name="synagogue-light";
export const id="dl_86ba827d5e0689d82535";
export const url=new URL("../icons/synagogue-light.svg?v=6ccaa2a59cbdc0f6135e180e4cb81743636a25d234e3199ddafcac5897709660",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
