export const name="dev-to-logo-bold";
export const id="dl_458a009888164903a71b";
export const url=new URL("../icons/dev-to-logo-bold.svg?v=15a748a82cd9cc2a0fdd9ccb9b728e34994bb8c180f97f30edc8b842d794dbe0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
