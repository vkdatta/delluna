export const name="smiley-angry-duotone";
export const id="dl_3d1afa4156d63fbbbb7c";
export const url=new URL("../icons/smiley-angry-duotone.svg?v=288f3d9519f3469dbfb12e5137e201e495283b4500856d2ea903344b90801f89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
