export const name="arrows-out-cardinal-thin";
export const id="dl_bcc6bc7187fd4f059c69";
export const url=new URL("../icons/arrows-out-cardinal-thin.svg?v=4c90f6eeee70e2107e2ba70acd1ada02ccf62c35dc0dd2479bfe0c28a39cc176",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
