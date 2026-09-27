export const name="arrow-down";
export const id="dl_bff643a35e084641bc2a";
export const url=new URL("../icons/arrow-down.svg?v=b2998bfef2830ef3cc24e4c16d0445aba0f6c0c6ae986b1db23319fd36d2b28e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
