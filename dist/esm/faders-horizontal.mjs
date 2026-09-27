export const name="faders-horizontal";
export const id="dl_e2ae4edb65e54c07baa0";
export const url=new URL("../icons/faders-horizontal.svg?v=25560f08215ecbf36c1353ef0dea59dd758fef3662a73d9015dbde7a7e5c6eda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
