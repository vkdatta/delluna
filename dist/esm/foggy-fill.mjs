export const name="foggy-fill";
export const id="dl_8944c7f9952547618a2a";
export const url=new URL("../icons/foggy-fill.svg?v=bca15110b7dfc72a738c5f8fe007fb0acb89aee72999834c5e7e3d38c89de046",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
