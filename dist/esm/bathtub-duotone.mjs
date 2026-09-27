export const name="bathtub-duotone";
export const id="dl_4d6be7d041d74bd195f5";
export const url=new URL("../icons/bathtub-duotone.svg?v=7ae0bce8a58ecbcc62e2803ca740103ae94ca26be04323bd8b2185bb1a7c2adf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
