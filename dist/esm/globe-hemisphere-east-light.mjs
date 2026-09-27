export const name="globe-hemisphere-east-light";
export const id="dl_53752567b3fc480f828e";
export const url=new URL("../icons/globe-hemisphere-east-light.svg?v=1770da2ed5b5508d687df6a0147847717e43a0bd5530694fe6e93e75051a76fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
