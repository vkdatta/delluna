export const name="crop_2_3";
export const id="dl_d4d94c1b32504d999049";
export const url=new URL("../icons/crop_2_3.svg?v=b662ce5d907cec2f1dfe2c0b0dcd3df4a3f9c76656f838e979c953ad2584f03b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
