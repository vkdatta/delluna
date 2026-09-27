export const name="number-one-light";
export const id="dl_95f7e13fc98442f281fb";
export const url=new URL("../icons/number-one-light.svg?v=90c69d1c6eca5b2c3f344f40a45be037882f9ffbcab79f21fbdcbb6cadc9ad3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
