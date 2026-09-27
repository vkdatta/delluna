export const name="lucid_1-battery-plus";
export const id="dl_3becbeb0610441c4bf93";
export const url=new URL("../icons/lucid_1-battery-plus.svg?v=c95cfe32ec0b6d1ee9db2d4a7c8ac634b55e431e5aed9f1484f545ca6b6dd053",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
