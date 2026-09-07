export const name="thumbs-down-bold";
export const id="dl_045dad41ecde43468512";
export const url=new URL("../icons/T/thumbs-down-bold.svg?v=a9daace5372f72bc701d06042794d0b70084576d97bf6fbac26d791d596bf4b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
