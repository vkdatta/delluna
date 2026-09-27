export const name="roller_skating-fill";
export const id="dl_7de8f791b86e8cc204cb";
export const url=new URL("../icons/roller_skating-fill.svg?v=77122b94cfba28ed1f2147150193be10d2ec4d5a6f4b95f83c7111c46ecdc44c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
