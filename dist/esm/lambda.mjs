export const name="lambda";
export const id="dl_fd255b583b2245198901";
export const url=new URL("../icons/lambda.svg?v=3ae3d3528fb6eb99adb27b3f63f745d239fe5636a52f0cbf852dfb64e485b1f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
