export const name="arrow-bend-left-down-light";
export const id="dl_517f9815ddfd4dbba244";
export const url=new URL("../icons/arrow-bend-left-down-light.svg?v=cf6ee6d898191c1fd21c9b9212e0ea232614d4a23d9e26d91214a4e4613f400a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
