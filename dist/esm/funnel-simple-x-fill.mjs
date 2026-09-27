export const name="funnel-simple-x-fill";
export const id="dl_27426ff05cdb4f7e9921";
export const url=new URL("../icons/funnel-simple-x-fill.svg?v=170fdb0271d1e81e4eb721da1111b6ee1d4b32b3b6678bd1ee6bcacd82ce8b27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
