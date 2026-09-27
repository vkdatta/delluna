export const name="auto_awesome_motion";
export const id="dl_baf852471cf3f815b1eb";
export const url=new URL("../icons/auto_awesome_motion.svg?v=872bd12eac42e4f05361f56ca462b3b47d4cf13aba00ca5c1de410d7f9a9e1d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
