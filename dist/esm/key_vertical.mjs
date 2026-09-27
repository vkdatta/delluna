export const name="key_vertical";
export const id="dl_a59305af406af7d6d13d";
export const url=new URL("../icons/key_vertical.svg?v=e2c983ff073a776220faba2f382b99ae9795449a333758e38ca8f1d85621a5b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
