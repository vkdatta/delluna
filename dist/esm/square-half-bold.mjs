export const name="square-half-bold";
export const id="dl_4044a3b9e5c3448caf5b";
export const url=new URL("../icons/S/square-half-bold.svg?v=2f8165874291b521ab54da329ffeb2628a0ba7cb20a38e4e81eaa23f6815c230",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
