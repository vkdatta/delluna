export const name="square-x";
export const id="dl_548abb2ab44445979260";
export const url=new URL("../icons/square-x.svg?v=9790ed98550b9b7b0f02019f3e2a51d14eddcfa561cf110f398ed62602e8f049",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
