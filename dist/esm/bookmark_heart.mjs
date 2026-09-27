export const name="bookmark_heart";
export const id="dl_1f0672e9d16d5fafbd63";
export const url=new URL("../icons/bookmark_heart.svg?v=712cc976b72c4d0d2dda82b0b341e48676dc40f33072396cc9959e380004e334",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
