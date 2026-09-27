export const name="switches-fill";
export const id="dl_aa1f384df7087e259a1d";
export const url=new URL("../icons/switches-fill.svg?v=6fcec8e4132bada40f4ba9e8cbaf6dac38c9993014bc8819db0bcc470ac7a835",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
