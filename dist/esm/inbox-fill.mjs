export const name="inbox-fill";
export const id="dl_721bb94315d49ea8a942";
export const url=new URL("../icons/inbox-fill.svg?v=33bb4045e69551cff00f1db49ffb58f30c31a34b55bb0c469b540a98e9736e53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
