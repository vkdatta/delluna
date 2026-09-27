export const name="text-align-center-thin";
export const id="dl_6373dbee51f7359c73fe";
export const url=new URL("../icons/text-align-center-thin.svg?v=4fffb3cf26cfd48e8303480a1da55da1df811931d91326c47de9cf9d37c84b09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
