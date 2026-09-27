export const name="square-split-vertical-duotone";
export const id="dl_6829e746e702d2497456";
export const url=new URL("../icons/square-split-vertical-duotone.svg?v=f70e573bc41e450acf6e60995901a42bfe37212acb78fdbb0a137205f9d6a615",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
