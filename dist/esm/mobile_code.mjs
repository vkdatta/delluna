export const name="mobile_code";
export const id="dl_fbfd0efd4e6a9678b0e2";
export const url=new URL("../icons/mobile_code.svg?v=e53353a3940e963be5b715f42dd9233713350c952140b2c043cb7baca02d8cc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
