export const name="bungalow";
export const id="dl_adfa6017eedf88641910";
export const url=new URL("../icons/bungalow.svg?v=99a3033b0f7e56f272f987945e4750b956937a65e355d3bc274155303f7c7f1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
