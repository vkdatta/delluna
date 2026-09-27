export const name="square-user-round";
export const id="dl_12b640bd6bcc41b693b2";
export const url=new URL("../icons/square-user-round.svg?v=b877a3fb2774f68810b2b56238376a4fca40305c3b6ecea6e07c8e696931fcb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
