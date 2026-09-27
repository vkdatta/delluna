export const name="phone_in_talk";
export const id="dl_64ceb3aac36f3f319570";
export const url=new URL("../icons/phone_in_talk.svg?v=f67c8dbbca0496aa2ef5d0abd638acfbe6cce47cec9801feef08f14baf8a7b0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
