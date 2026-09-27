export const name="house-simple-bold";
export const id="dl_3169765369874395b150";
export const url=new URL("../icons/house-simple-bold.svg?v=6f68252743a88d360f1f14617226d2fa1a17ad647f086182a2b0335e2279cc40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
