export const name="no_sound-fill";
export const id="dl_5c8a6f7b017fbd92012c";
export const url=new URL("../icons/no_sound-fill.svg?v=6f7f9282c27e6718f40d1230d70c0bf3a2334804b9b911a7de83ef85b3a99537",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
