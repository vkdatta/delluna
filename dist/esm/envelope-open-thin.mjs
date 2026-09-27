export const name="envelope-open-thin";
export const id="dl_096feb547cc441cfb82d";
export const url=new URL("../icons/envelope-open-thin.svg?v=acf480b1d5a05f616425965ed502fffff1520d6b6c3912fae99057b3826c688f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
