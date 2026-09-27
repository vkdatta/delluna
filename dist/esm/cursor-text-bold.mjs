export const name="cursor-text-bold";
export const id="dl_41975ea073f043918bad";
export const url=new URL("../icons/cursor-text-bold.svg?v=e196134dfa1cc09ed2f1d16af5ee1e26a5c784ce948941605977e029f87cf530",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
