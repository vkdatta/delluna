export const name="chat-circle-fill";
export const id="dl_aca85f8cac2440b0bf0a";
export const url=new URL("../icons/chat-circle-fill.svg?v=c0156f59b637f4ee43fd48ec36e679768ffcdb6d7386b2efe7461f2d4d2264e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
