export const name="coin-vertical-bold";
export const id="dl_45b600fff3264eb9b02e";
export const url=new URL("../icons/coin-vertical-bold.svg?v=9e928c0ce5cc30dcdd3ab94275934ce8a20573567382cb466a4bb9c6f7e15be5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
