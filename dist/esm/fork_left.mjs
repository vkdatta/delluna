export const name="fork_left";
export const id="dl_7934dad80c803f5ba635";
export const url=new URL("../icons/fork_left.svg?v=83f70111b7f6d0f6675e6db597495d54de0d52f8aeaaed86ba7bf58910fe2f3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
