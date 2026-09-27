export const name="gender-intersex-thin";
export const id="dl_6fd0aa68d7134da8aa16";
export const url=new URL("../icons/gender-intersex-thin.svg?v=15fb1444dd28180691baff34cda0fa8a61725e8136fad80c47ce74b9041a99cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
