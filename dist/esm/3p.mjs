export const name="3p";
export const id="dl_7171e9af38edc4923ddc";
export const url=new URL("../icons/3p.svg?v=231eedda6e07a3236716acebd41f84cb3218558b6ea2a2b8c9e03190538cc02d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
