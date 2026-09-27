export const name="sailing-fill";
export const id="dl_ef7b7ccffe5e49f4b8f8";
export const url=new URL("../icons/sailing-fill.svg?v=e675ab841e8ad415d982b2ffa97c5d24ea022647f0c283c0b7963e598ca708db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
