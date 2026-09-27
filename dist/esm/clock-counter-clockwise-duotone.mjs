export const name="clock-counter-clockwise-duotone";
export const id="dl_8c9871a3dd9e4a51970d";
export const url=new URL("../icons/clock-counter-clockwise-duotone.svg?v=23644557648e6432ef7f3771994ae061e98f0bec4f0f760e67d660bb0143e519",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
