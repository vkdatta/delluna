export const name="bicycle-light";
export const id="dl_ff8a2c2f0a95438496f7";
export const url=new URL("../icons/bicycle-light.svg?v=f2b1b7df4df04f8d88388c78e30bfcaabb2a9a0b822b410bbba2572d9e11c30f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
