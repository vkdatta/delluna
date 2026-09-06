export const name="square-stack";
export const id="dl_24ae6fbffa664b10b868";
export const url=new URL("../icons/square-stack.svg?v=a71790ba1e70c6433b598592ca54a160837107480f248ace21f359102d1b4004",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
