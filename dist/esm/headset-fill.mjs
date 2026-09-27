export const name="headset-fill";
export const id="dl_2148b9844ba64697bc9a";
export const url=new URL("../icons/headset-fill.svg?v=60696632b34f37fb3fb4e7c54d7ab039a500a031d57c81a0fa43c8568ddd2041",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
