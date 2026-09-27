export const name="lucid_3-minimize-2";
export const id="dl_b6c863f0cc9547dc8971";
export const url=new URL("../icons/lucid_3-minimize-2.svg?v=dffc2aeae5766c06f2be4cef8bf83cae445ac8e7cb1500d141e9f93d85b6414f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
