export const name="hard-drive-duotone";
export const id="dl_6c8a1c1013bd4949a0c3";
export const url=new URL("../icons/hard-drive-duotone.svg?v=eb4d09c5f768b5eff93ec0708e8b283da6bf14bb00d38d6c213fa2cc87e0ea00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
