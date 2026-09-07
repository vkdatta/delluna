export const name="dropbox-logo-light";
export const id="dl_4908420761804dc5977b";
export const url=new URL("../icons/dropbox-logo-light.svg?v=0044d6fdd4e106403e46e521fe2bbe68fa97638ade26855e817ec62a1edc3a48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
