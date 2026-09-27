export const name="format_clear";
export const id="dl_5495cc5e6f6491ae2f73";
export const url=new URL("../icons/format_clear.svg?v=3da6850c3814a9c13b801aa071bbddca3f3513f93d13b99e35782133e94febbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
