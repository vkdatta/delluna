export const name="lock-key-open-thin";
export const id="dl_3bdf9ca316a14526bade";
export const url=new URL("../icons/lock-key-open-thin.svg?v=d3a6e7bd02593ce2a4962d46f9b81731d80b00cb32dd1adbd538287bb27608eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
