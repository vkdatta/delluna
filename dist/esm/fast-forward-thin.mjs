export const name="fast-forward-thin";
export const id="dl_d345d1a9c5d54dee810a";
export const url=new URL("../icons/fast-forward-thin.svg?v=a9a7f323be2f2c36d793c304a41faa9d4feb5491ba0bc54a72de83809a48e761",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
