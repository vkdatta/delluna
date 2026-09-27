export const name="target-thin";
export const id="dl_795d64510d7ddacd51d2";
export const url=new URL("../icons/target-thin.svg?v=fd9b4dfc5c6dff33752435ec2d48005eaa75f7ab899a298eb739128b6ca2e610",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
