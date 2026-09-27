export const name="drop-duotone";
export const id="dl_c57abf3ac72e4c808a3b";
export const url=new URL("../icons/drop-duotone.svg?v=97a531088060e84ef4b3f37a002b85100d3efe2b594b46ced2fe03814e830a28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
