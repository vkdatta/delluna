export const name="incomplete_circle-fill";
export const id="dl_4f44a470ef55421b9853";
export const url=new URL("../icons/I/incomplete_circle-fill.svg?v=3e5d08ad9da921e28942c8aba7350255215641c48818ccb29559d46691dc9278",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
