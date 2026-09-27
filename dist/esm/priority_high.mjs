export const name="priority_high";
export const id="dl_09d90821f2abc94f6873";
export const url=new URL("../icons/priority_high.svg?v=5f16ac8f54ca634b8d4a8e99a76c55122fb7d74ab2e23014e5dbffe75f59b596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
