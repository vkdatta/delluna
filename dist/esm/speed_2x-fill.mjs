export const name="speed_2x-fill";
export const id="dl_3a30f5a982894ccf9a12";
export const url=new URL("../icons/speed_2x-fill.svg?v=b7c708e98c600ee910b094e8df73f62df759d834675f9cd666d46186714898c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
