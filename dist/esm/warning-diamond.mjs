export const name="warning-diamond";
export const id="dl_e63c458685734608ac9d";
export const url=new URL("../icons/W/warning-diamond.svg?v=7d7898a10627b68826585aaab8e7a5eb219bc12622bd3335dcc83ebd730b5643",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
