export const name="person-simple-tai-chi-duotone";
export const id="dl_145ef324112f4701acee";
export const url=new URL("../icons/person-simple-tai-chi-duotone.svg?v=47974a6bed7f3aa61f8b3599b7bb69ee07d9aa2185d7b0a85def57f84e7e39f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
