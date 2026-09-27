export const name="drop-half-duotone";
export const id="dl_1052a18b69b1465a99c5";
export const url=new URL("../icons/drop-half-duotone.svg?v=8b7770f1d10736f0145578ba9954dca51d58ddba405c5be87903f27bf9d92c2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
