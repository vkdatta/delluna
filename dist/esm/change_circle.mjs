export const name="change_circle";
export const id="dl_3577f709c12de21bad66";
export const url=new URL("../icons/change_circle.svg?v=c8c45d57df21c8469b7c150bf311cd7d9485ae401cfc96b704d1d7af8dadbb3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
