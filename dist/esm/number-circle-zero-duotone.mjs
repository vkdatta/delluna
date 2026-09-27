export const name="number-circle-zero-duotone";
export const id="dl_3b74d99aa19e4b4c9e66";
export const url=new URL("../icons/number-circle-zero-duotone.svg?v=923e66da38e63b1c5acc36e928d98463848d83fd0f3f4a8fac24354c1d4bc949",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
