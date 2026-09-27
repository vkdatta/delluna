export const name="oven-bold";
export const id="dl_0ca38e01c61648eca202";
export const url=new URL("../icons/oven-bold.svg?v=ba7bf0d109c916d7691d16183ff8ea212599ed681333a761af8dbca0a1250647",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
