export const name="upload-simple-light";
export const id="dl_9d76c1be789c70803893";
export const url=new URL("../icons/upload-simple-light.svg?v=81e38369b2be86732e7c4a24f4d52535422a3084eb1469a31395a7c1e52ceea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
