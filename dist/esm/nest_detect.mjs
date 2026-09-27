export const name="nest_detect";
export const id="dl_4f2b447a1fdad95172cd";
export const url=new URL("../icons/nest_detect.svg?v=dda4b0685f37136ef82b19556b2d4891c8c26b1219e637153b74b72d987d7608",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
