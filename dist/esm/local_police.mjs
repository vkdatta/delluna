export const name="local_police";
export const id="dl_55d8cc969b2142089736";
export const url=new URL("../icons/local_police.svg?v=31e0f484138724b8a1b21915ccf8f6958b7fe2f7d0ebb672a035249e626ddf06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
