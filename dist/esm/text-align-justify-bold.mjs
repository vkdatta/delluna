export const name="text-align-justify-bold";
export const id="dl_e8e871fce1ec58f30920";
export const url=new URL("../icons/text-align-justify-bold.svg?v=22301e0b7f72eae14f9cea7cb182d9d43e9d97988d0f83683bdafadf20491c17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
