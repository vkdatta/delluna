export const name="text-t-bold";
export const id="dl_813db5a0ca103853f98b";
export const url=new URL("../icons/text-t-bold.svg?v=738ef3bc7d1cd8acaa0a50c2046dc40d9b254529aad49438f08814693ee8c9f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
