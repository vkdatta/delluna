export const name="lucid_3-message-square-share";
export const id="dl_bddfa3d0991041adba88";
export const url=new URL("../icons/lucid_3-message-square-share.svg?v=27a49b55fd3ecf70ea30c0835eeacd373bea94c21271ea92be3d8046712308bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
