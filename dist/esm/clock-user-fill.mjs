export const name="clock-user-fill";
export const id="dl_2ff584f4b7804233a02b";
export const url=new URL("../icons/clock-user-fill.svg?v=ba1aa703a3e886243ef4f3dece6c16c82c9df26129b51ffe82c561fc28e84300",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
