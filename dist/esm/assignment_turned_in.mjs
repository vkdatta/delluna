export const name="assignment_turned_in";
export const id="dl_79d94bec83004f529256";
export const url=new URL("../icons/assignment_turned_in.svg?v=411eb5bd417ebd036676b474883c4619929feb5a10b038525a534d37a7feb6fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
