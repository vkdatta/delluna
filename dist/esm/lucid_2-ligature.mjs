export const name="lucid_2-ligature";
export const id="dl_8f74f75de6a1490aaff6";
export const url=new URL("../icons/lucid_2-ligature.svg?v=48eadbd96991026f13a2ce45e47eac814489538acd1ab521a7c1fd260ab0a5fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
