export const name="wave-sine-bold";
export const id="dl_98213d222afe74948fed";
export const url=new URL("../icons/wave-sine-bold.svg?v=b61ecef0999a4cbc40c5182303c1135b9a6427385c5be0ccf0c9a0b451085b07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
