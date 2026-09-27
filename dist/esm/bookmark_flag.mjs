export const name="bookmark_flag";
export const id="dl_5ac341584dee064c3c23";
export const url=new URL("../icons/bookmark_flag.svg?v=e2ffec05599744ba94cf72fd0ff958f5af58a6ebf2b14b79fd84f5cae5dfbfac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
