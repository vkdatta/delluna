export const name="wave-triangle-bold";
export const id="dl_309eea61a1436eb18323";
export const url=new URL("../icons/wave-triangle-bold.svg?v=d5ff00d64d664247f599388c6a983f253574f1483d3b5381635aea41de30ee87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
