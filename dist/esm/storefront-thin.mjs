export const name="storefront-thin";
export const id="dl_95577a2674d422b7e43f";
export const url=new URL("../icons/storefront-thin.svg?v=98726e6966c2bf681d5dee7b5fe553f28e45e126781f665d139a68b31b5363eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
