export const name="equals-thin";
export const id="dl_ad2ffc7089dc4884ada9";
export const url=new URL("../icons/equals-thin.svg?v=465c984e989dca925d54483d57e1b01d85fdc977aa6bb7bd7908e9f2411a96ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
