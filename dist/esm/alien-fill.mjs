export const name="alien-fill";
export const id="dl_815b2d45c4cd4276812a";
export const url=new URL("../icons/alien-fill.svg?v=e12e9883474e6ca9819f79be0c28edf840f2f86ff112715bbd4e7633f0d31bf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
