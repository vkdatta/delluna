export const name="psychiatry";
export const id="dl_4554b71667d9d77df497";
export const url=new URL("../icons/psychiatry.svg?v=aac392d6efda607b786e3a8fec1ab4d8c31fac6a3fb73a6979cf8764557cac2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
