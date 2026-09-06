export const name="star-check";
export const id="dl_2d479755179b4b08b767";
export const url=new URL("../icons/star-check.svg?v=07862dd2f52b71abf78bfc94fdf6dde26818b0b71377f15af03bb9196506f72c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
