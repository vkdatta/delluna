export const name="sign-out-bold";
export const id="dl_1f6672de3ed6f20a06e6";
export const url=new URL("../icons/sign-out-bold.svg?v=352385ca4c87b4add2608dd6ddfa708bf9eb0720efb4002e31b53bd93e45e325",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
