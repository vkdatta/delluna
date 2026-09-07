export const name="gender-female-thin";
export const id="dl_4c4dd7ccdf1b46b78c7c";
export const url=new URL("../icons/gender-female-thin.svg?v=fb97eb87f0796dca5f924fb35ddf34ab28917955f74beaad5389ca14241e0e4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
