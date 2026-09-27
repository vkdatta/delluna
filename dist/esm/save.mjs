export const name="save";
export const id="dl_115d8191922db15e7c2d";
export const url=new URL("../icons/save.svg?v=586de8870e0e6b2c13de07f0458ea45381d4a6b6d02cab0148adcabd43cebd76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
