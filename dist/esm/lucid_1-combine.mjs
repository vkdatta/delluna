export const name="lucid_1-combine";
export const id="dl_3310eef0cd134657bfee";
export const url=new URL("../icons/lucid_1-combine.svg?v=84d14033a428c4f1299d9ca252c1220afbee769ecfecdc8113673f527b3271f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
