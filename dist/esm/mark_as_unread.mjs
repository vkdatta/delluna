export const name="mark_as_unread";
export const id="dl_8a788b0499f640b791f8";
export const url=new URL("../icons/M/mark_as_unread.svg?v=e36e2eca63854465e91b9016227b885de4f9456c70fadae87cbb4e6e5894159e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
