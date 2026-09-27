export const name="bookmark_check";
export const id="dl_8071703ae3ab1ed1ea5c";
export const url=new URL("../icons/bookmark_check.svg?v=10804e89382079bf568877685eafc9faafb81161927fb0380965cc4d8dc92bf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
