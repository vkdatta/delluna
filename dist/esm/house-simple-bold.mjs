export const name="house-simple-bold";
export const id="dl_3169765369874395b150";
export const url=new URL("../icons/house-simple-bold.svg?v=bfd7b076145aae4d2e648c4a8c4266d8028392b677d718c4f853ce0e221b7387",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
