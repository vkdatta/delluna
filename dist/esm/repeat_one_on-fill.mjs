export const name="repeat_one_on-fill";
export const id="dl_6b0c233b036445a6e318";
export const url=new URL("../icons/repeat_one_on-fill.svg?v=b9aa2129055466d2f29ae93a647f0c6a12357a2c3bacb2c7eacdc7c4814432b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
