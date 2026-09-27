export const name="arrows-split-fill";
export const id="dl_52d725e00898402c8473";
export const url=new URL("../icons/arrows-split-fill.svg?v=a3bc603c6852d901966dc46fb61b50bf3f95d8bfe843d287deecda36819100ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
