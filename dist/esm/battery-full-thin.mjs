export const name="battery-full-thin";
export const id="dl_e3b9949cf60044c18b5f";
export const url=new URL("../icons/battery-full-thin.svg?v=a71c066da973c60ab6516c81a05cf7afc26161010e6a635b5f2cd1ba2de2205c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
