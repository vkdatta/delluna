export const name="flag_2";
export const id="dl_e8f533328188cef486df";
export const url=new URL("../icons/flag_2.svg?v=ba163d7a10e91e3ce8a30ef3ed6fb718a071d2d8783769f1053971edcefc40a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
