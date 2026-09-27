export const name="martini-duotone";
export const id="dl_fd38008875824722abba";
export const url=new URL("../icons/martini-duotone.svg?v=bb993f8d0ded5b278aad6b3571456838066e8934797e8c0b1dacba0443d56155",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
