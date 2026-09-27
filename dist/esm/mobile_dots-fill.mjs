export const name="mobile_dots-fill";
export const id="dl_52d42eb1bd32e4b0eb93";
export const url=new URL("../icons/mobile_dots-fill.svg?v=9142f5beb5ed8116814d506bd0b6134336a12e04916f74fac04c464a2abcf62d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
