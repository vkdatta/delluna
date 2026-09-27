export const name="line-segments-bold";
export const id="dl_f1fea65a9b2f4d34b48a";
export const url=new URL("../icons/line-segments-bold.svg?v=cd78a4bbeeb5614a905b9b6fcbef03c5cf4acc7bcd89b4f94c83e8d3e54b3fef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
