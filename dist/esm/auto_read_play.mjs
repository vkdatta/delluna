export const name="auto_read_play";
export const id="dl_3307cca9fdecbe55c443";
export const url=new URL("../icons/auto_read_play.svg?v=7181283409a6a96d2e3300b55809fa5b2486fc76b769d409d575602d7284bb9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
