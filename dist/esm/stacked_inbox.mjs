export const name="stacked_inbox";
export const id="dl_b618990652ea4c68bb45";
export const url=new URL("../icons/stacked_inbox.svg?v=f981ef96fc9ad331c6702f90e103257cfb80f4d3b19fa6aac1bb87957a9e5461",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
