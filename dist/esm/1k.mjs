export const name="1k";
export const id="dl_0bd16ebd1f73b41c0d81";
export const url=new URL("../icons/1k.svg?v=da79fbcb70edff61d4756e7ad17019ee73ab931670a071db37650212250b271a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
