export const name="mobiledata_off";
export const id="dl_7f272637b5395913c1d4";
export const url=new URL("../icons/mobiledata_off.svg?v=fba4710107b9b097bf5077321ba5cbd8244d271750780fd9e9c3df2b453b47aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
