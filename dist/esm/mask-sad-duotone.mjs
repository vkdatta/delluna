export const name="mask-sad-duotone";
export const id="dl_9c3bb235682348f3a54e";
export const url=new URL("../icons/mask-sad-duotone.svg?v=30dc0a25e086eee7115a3c0a5a1d1fcbd7d8c62aa53a679d60634baf21536bd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
