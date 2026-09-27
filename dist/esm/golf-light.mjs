export const name="golf-light";
export const id="dl_7b5ae2d51be64afe98c1";
export const url=new URL("../icons/golf-light.svg?v=71df6820a1c05c50ab93ac34e12e1aaeb21d3d7afa4155de4bc4f217e665f467",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
