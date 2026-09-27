export const name="detector_co";
export const id="dl_aa6dca76edf172ed3423";
export const url=new URL("../icons/detector_co.svg?v=a4b74bcce10587acd4f51e554a34a36766d2ae67f0aaa6125ea2fd1ca1664d7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
