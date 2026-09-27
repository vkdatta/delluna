export const name="arrow-elbow-right-up-fill";
export const id="dl_2c02f21b9ca342e4a85c";
export const url=new URL("../icons/arrow-elbow-right-up-fill.svg?v=027123573e650829d88e709e1d360787e7b7081f36159620e930307a520a74fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
