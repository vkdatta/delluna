export const name="lucid_1-ambulance";
export const id="dl_046589c0eecc413a9522";
export const url=new URL("../icons/lucid_1-ambulance.svg?v=8dfa96961fae8113fd2827525e5bddfca34fdad6c4e0bbad95584606f831b7b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
