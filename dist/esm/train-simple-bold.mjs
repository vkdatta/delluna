export const name="train-simple-bold";
export const id="dl_f32b4a7957b3aa082cce";
export const url=new URL("../icons/train-simple-bold.svg?v=8af81be35c196ef9ae8f97373c18740cda7e6d6e12b557c68acc29ebefbe810f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
