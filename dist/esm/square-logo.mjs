export const name="square-logo";
export const id="dl_04597278f430cacbbbd6";
export const url=new URL("../icons/square-logo.svg?v=0b582ee1a84829336b15260fa35641a02f792486bbd978904f793b66ba7c07f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
