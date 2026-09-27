export const name="lucid_1-bus-front";
export const id="dl_2237df42f65b4050ab81";
export const url=new URL("../icons/lucid_1-bus-front.svg?v=97912c1dbb0b5c6492316dca6d9bf20bd3662e84f28a8ce215d0ad300e3eff1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
