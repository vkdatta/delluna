export const name="number-two-thin";
export const id="dl_2d8b16b9425344729555";
export const url=new URL("../icons/number-two-thin.svg?v=9a67463c0b98c5da15bec21b2dd1183a977e70c6ae3925ee173ca5065023925c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
