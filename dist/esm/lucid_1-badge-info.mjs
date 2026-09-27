export const name="lucid_1-badge-info";
export const id="dl_2d07ed5662b84c0fbb41";
export const url=new URL("../icons/lucid_1-badge-info.svg?v=9972d4f911ecf0e094925fa8236e653b9764ac19ee98920477f4ac4549ff720d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
