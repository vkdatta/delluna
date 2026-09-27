export const name="tv_signin";
export const id="dl_02a73633aef5d04e6a67";
export const url=new URL("../icons/tv_signin.svg?v=3e2510a742cd47f92df86cac48204ff9941b4cfff6a71b312ddc0bbae6e14430",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
