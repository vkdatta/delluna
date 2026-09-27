export const name="check_circle_unread-fill";
export const id="dl_86bdd35f1c2044b60cca";
export const url=new URL("../icons/check_circle_unread-fill.svg?v=418bf7fdcdaa39a509fccc770a92313205a8618fb94780269a989badaa96d8c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
