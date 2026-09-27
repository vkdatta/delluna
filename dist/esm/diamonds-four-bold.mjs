export const name="diamonds-four-bold";
export const id="dl_254c804de800451a94df";
export const url=new URL("../icons/diamonds-four-bold.svg?v=6d775ca46cae2d6b712a9be453a9406436f392ffaebf57a132d0b8c97fc2879a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
