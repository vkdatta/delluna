export const name="theater";
export const id="dl_3ebbaaa83be5455c8f43";
export const url=new URL("../icons/theater.svg?v=69ef68016049876cb40bb604df941fbb5299b2fab38d33837ffe1f411c93117e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
