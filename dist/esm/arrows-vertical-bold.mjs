export const name="arrows-vertical-bold";
export const id="dl_19e0bc935a8a4b86a478";
export const url=new URL("../icons/arrows-vertical-bold.svg?v=d20f989f1c84c692e5b1fdd6447b5be13d33df2b860f0336e43854ea0825cfd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
