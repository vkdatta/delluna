export const name="instant_mix-fill";
export const id="dl_56f78538b7bbc9d17bcd";
export const url=new URL("../icons/instant_mix-fill.svg?v=b08881e7d100182f63d4f8c0c0159c48e0f283cd599bfa0a20ad3fd279e948fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
