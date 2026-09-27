export const name="circle-bold";
export const id="dl_963ae29c8612423fa8d9";
export const url=new URL("../icons/circle-bold.svg?v=620296f50f8f8769f6c4d5123bfa108279c6e2f3b1889f2217535a4c4f79984f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
