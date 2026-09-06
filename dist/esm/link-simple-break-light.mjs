export const name="link-simple-break-light";
export const id="dl_39c78a0346a14d4eb3ea";
export const url=new URL("../icons/link-simple-break-light.svg?v=690b806dca54c1c2e88382c1e7ef6ff2aef020ac3dc4b5b320ae166a99cda3c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
