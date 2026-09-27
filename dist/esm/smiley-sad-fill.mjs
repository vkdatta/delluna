export const name="smiley-sad-fill";
export const id="dl_e603aaae5c6293644c41";
export const url=new URL("../icons/smiley-sad-fill.svg?v=3c472cb0b9b9ba23ef8cfdcaa337fd805e4cadad9151744207b9dc6a082429fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
