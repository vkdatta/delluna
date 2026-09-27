export const name="topic-fill";
export const id="dl_6ad198fa62e90358c7ae";
export const url=new URL("../icons/topic-fill.svg?v=9ea40fe7e25dc6ac6e251d9a81c3fb604f2c9e6a6198b9b7f171e8dfcd1cdbd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
