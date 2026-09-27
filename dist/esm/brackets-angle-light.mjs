export const name="brackets-angle-light";
export const id="dl_78285ce668da4701896c";
export const url=new URL("../icons/brackets-angle-light.svg?v=9afbeb887fbc0e8a34e8a0a04d1954ddd8aa5aaa3c6e495c2429e27cb8434d1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
