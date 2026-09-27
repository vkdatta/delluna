export const name="member-of-fill";
export const id="dl_045b179d8c5247a1b041";
export const url=new URL("../icons/member-of-fill.svg?v=9dfad8789aef37c81b4acb152e43a3da537222d91f2a0f20c26e212578b1bb87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
