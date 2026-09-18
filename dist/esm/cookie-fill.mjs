export const name="cookie-fill";
export const id="dl_91114a26c3484fdf9383";
export const url=new URL("../icons/cookie-fill.svg?v=b0df85616a2776b5d74b556658cb501297dcf1247b1729e52a085774d294385d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
