export const name="arrows-out-cardinal-thin";
export const id="dl_bcc6bc7187fd4f059c69";
export const url=new URL("../icons/arrows-out-cardinal-thin.svg?v=083398ac197a47b25b66801ffee86553c3c0c4f7b6621f4f10148c9ab91a5dc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
