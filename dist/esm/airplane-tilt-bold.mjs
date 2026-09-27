export const name="airplane-tilt-bold";
export const id="dl_7e498ec8b828476891a9";
export const url=new URL("../icons/airplane-tilt-bold.svg?v=6e2ece62a0ecba0d17e036c44a442cc2c68ebef7b3a10dbcafb5d49b90427e83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
