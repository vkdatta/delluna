export const name="toggle-left-fill";
export const id="dl_a48f840d344c9c34d5c4";
export const url=new URL("../icons/toggle-left-fill.svg?v=73f3fc86a9b9fec4dd36baa1e4d7141af894f83a7a4e5817bf51d23da60239e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
