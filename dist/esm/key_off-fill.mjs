export const name="key_off-fill";
export const id="dl_ddaeea129d42f70794a1";
export const url=new URL("../icons/key_off-fill.svg?v=2aa3b6f6c3ba2badda20bb52d55a451fc8cc002c710e69ee2d50fc2aa0927cec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
