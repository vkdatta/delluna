export const name="arrows-in-line-vertical-duotone";
export const id="dl_2cf541486bae41b08da4";
export const url=new URL("../icons/arrows-in-line-vertical-duotone.svg?v=c90d47bd9b761c2edfce9e0bcc1fea087344483e1dcf3af76396aa90de6f4596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
