export const name="hand-coins-bold";
export const id="dl_a3578ce007db4d98ba0a";
export const url=new URL("../icons/hand-coins-bold.svg?v=4a1bc6021bcbd252fe67815d943a3cb1b897293d7a276499bcc7a00c019d05e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
