export const name="11mp";
export const id="dl_f7768689f4d8067b356e";
export const url=new URL("../icons/11mp.svg?v=148cb3e2d0eb632b81e108a76a1798d58fa476036af5270c6b63501283c14494",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
