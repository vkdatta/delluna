export const name="satellite-fill";
export const id="dl_7a9de628152d5a6ef66c";
export const url=new URL("../icons/satellite-fill.svg?v=3285fbe1798c5f7176d215f467363eb6daeff9a5fc3e2f488591d2878b99ef43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
