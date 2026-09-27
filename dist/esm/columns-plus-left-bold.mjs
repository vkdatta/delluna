export const name="columns-plus-left-bold";
export const id="dl_4512818de9294c88b921";
export const url=new URL("../icons/columns-plus-left-bold.svg?v=9de99e59c89be1960a39e365d5168f41cdcbe52be3f54b1c3430ea2f15c52ced",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
