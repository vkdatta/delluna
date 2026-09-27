export const name="hard-drives-bold";
export const id="dl_659b59510dc44f849225";
export const url=new URL("../icons/hard-drives-bold.svg?v=210afe08f4b96c66b54748436716ef8f4ec800f15b282b7125f9207de9fc157b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
