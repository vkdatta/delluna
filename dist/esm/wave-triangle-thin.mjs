export const name="wave-triangle-thin";
export const id="dl_96580aa324315e18c228";
export const url=new URL("../icons/wave-triangle-thin.svg?v=2193b1a88bd2e8e9c41945e1ab254841788ac7299e43a5dfe00dbfade9d3ccd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
