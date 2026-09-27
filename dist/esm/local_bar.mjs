export const name="local_bar";
export const id="dl_4cea7537d1b7b802ff32";
export const url=new URL("../icons/local_bar.svg?v=635b13a3c820bfa02d31ee95bde5379ff6a55d2768c50c92c926482f5a0e1dd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
