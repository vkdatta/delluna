export const name="takeout_dining";
export const id="dl_23158739a3bb49f2aa5b";
export const url=new URL("../icons/T/takeout_dining.svg?v=d198565b51d6d5bfdf321f61ef24ceaed1f80cc695fdc40ea47bd0b16e74c9c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
