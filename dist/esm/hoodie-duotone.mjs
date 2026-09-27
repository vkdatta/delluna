export const name="hoodie-duotone";
export const id="dl_654828b44a15493e83a8";
export const url=new URL("../icons/hoodie-duotone.svg?v=84ab9a0020ffcced609801add6b23d11399f46695d5fb859160eb5600c6c134d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
