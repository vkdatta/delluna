export const name="text-strikethrough-thin";
export const id="dl_1bfb0523416b43c96d0c";
export const url=new URL("../icons/text-strikethrough-thin.svg?v=d26fd4440721c8a91d13b14fef070fb94e2294631c919ab24a7795d41371122b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
