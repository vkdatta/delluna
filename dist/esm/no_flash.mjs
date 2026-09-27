export const name="no_flash";
export const id="dl_18f16d79d98e17ecff67";
export const url=new URL("../icons/no_flash.svg?v=13b03e4d9980fefeb50615387d5a049b48f92f9f077a9d6ae28ca6cc005733d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
