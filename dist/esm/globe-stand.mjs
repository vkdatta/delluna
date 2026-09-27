export const name="globe-stand";
export const id="dl_b106e72d7b534ff59d5e";
export const url=new URL("../icons/globe-stand.svg?v=2772311886d85b896c706166eba5b4db73af7110f55ebd62cce4ffa172b2de3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
