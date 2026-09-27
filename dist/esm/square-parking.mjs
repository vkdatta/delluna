export const name="square-parking";
export const id="dl_171a3e7863f24ede8f19";
export const url=new URL("../icons/square-parking.svg?v=f9588cf7581ed9d5dd8788f78555762b755da03a0a36647490c390b01dc6fd1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
