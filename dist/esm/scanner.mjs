export const name="scanner";
export const id="dl_2af5ed5617a9407cb4e0";
export const url=new URL("../icons/S/scanner.svg?v=68a1c007a44329aecfc848b9b37341ed019981a51fd993cecd56793e89efed93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
