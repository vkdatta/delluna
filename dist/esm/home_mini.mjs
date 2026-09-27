export const name="home_mini";
export const id="dl_ffd8b7d878777c5774e4";
export const url=new URL("../icons/home_mini.svg?v=0b696aa1dcba3c127328aea6c59c7f49fb269bb4e6bb4270a007ac5f1d8fc88d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
