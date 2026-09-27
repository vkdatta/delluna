export const name="function-duotone";
export const id="dl_a15cc21efec443eebdf0";
export const url=new URL("../icons/function-duotone.svg?v=53a3693de136a525e2397efa8914fbe08c1316df8bba4651cb87fc280285a574",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
