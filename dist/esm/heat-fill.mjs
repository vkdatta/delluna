export const name="heat-fill";
export const id="dl_4caae70d6c3846f184ef";
export const url=new URL("../icons/H/heat-fill.svg?v=32cf8cd51e2647498cee903bd2fcac5160894229f52f8193d50455ed41270918",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
