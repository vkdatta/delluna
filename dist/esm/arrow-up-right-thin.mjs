export const name="arrow-up-right-thin";
export const id="dl_cd2d1d9a96f641dabb5f";
export const url=new URL("../icons/arrow-up-right-thin.svg?v=019f7c82e56f05a811b4f7c733eb0d4891ed96e39fe030f93a76179da086b1b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
