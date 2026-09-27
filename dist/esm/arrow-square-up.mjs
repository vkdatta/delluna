export const name="arrow-square-up";
export const id="dl_fe52e7a8f9124131bab0";
export const url=new URL("../icons/arrow-square-up.svg?v=22510fb85b3e594915bbf5e6516b7a9efe30bf131a7f25bc22bb2582503b2285",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
