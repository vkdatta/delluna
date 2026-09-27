export const name="smiley-meh-bold";
export const id="dl_50f5f33be10375da0bae";
export const url=new URL("../icons/smiley-meh-bold.svg?v=b5af6c700fd29d0373220f046ebc51ff81495e7dd301babcb4ccd697ba19f13c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
