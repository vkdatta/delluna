export const name="security-camera-bold";
export const id="dl_c183754cf74edc2eccb3";
export const url=new URL("../icons/security-camera-bold.svg?v=f7d3c322687a118b87c4d85a9955ec11f7054be700d8d251d7f4c15cc1c11d90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
