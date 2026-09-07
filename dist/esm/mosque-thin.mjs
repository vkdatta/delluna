export const name="mosque-thin";
export const id="dl_5faacef3cbe4454d8459";
export const url=new URL("../icons/mosque-thin.svg?v=5e6b006f7d4f57a5ef5eb2544df2f992a843932952b55d83665d8006f6608e4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
