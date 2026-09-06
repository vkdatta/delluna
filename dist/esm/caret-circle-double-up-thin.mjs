export const name="caret-circle-double-up-thin";
export const id="dl_e46749c7aaf0477c866f";
export const url=new URL("../icons/caret-circle-double-up-thin.svg?v=53a8452a9c52e150acda67a3236e99e02d09ddb064386a38463a0b853e0c9c78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
