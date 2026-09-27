export const name="phone-disconnect-bold";
export const id="dl_d664306f79524a698f2b";
export const url=new URL("../icons/phone-disconnect-bold.svg?v=619241b7c218f1ee710e9d8f7e3cf7edade1c416f2dbb529b37923cdfd39ef0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
