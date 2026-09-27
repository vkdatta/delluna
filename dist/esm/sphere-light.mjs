export const name="sphere-light";
export const id="dl_92a64e59d72164cc4915";
export const url=new URL("../icons/sphere-light.svg?v=036216d88f13e9d21334a0c669729d20cbb93b155f20eb2fdaef33d531e355f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
