export const name="user-list-bold";
export const id="dl_d763f89616eec5c77881";
export const url=new URL("../icons/user-list-bold.svg?v=2f21ce2eb50aa9a64a19c6015eb7f30bee4419316a1db0187258ea01c3618c85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
