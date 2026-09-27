export const name="lucid_2-layers";
export const id="dl_9711306679414b2eb497";
export const url=new URL("../icons/lucid_2-layers.svg?v=5931fad8c4d93fa8947424e9a953eb151fa47e2ca12e7b7e34338e4f1ba5e4f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
