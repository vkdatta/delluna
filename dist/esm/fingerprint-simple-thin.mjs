export const name="fingerprint-simple-thin";
export const id="dl_29fbb7ebc29d4e0f88f5";
export const url=new URL("../icons/fingerprint-simple-thin.svg?v=9da5d5da4d674b5ad8587ca32e8c51d66dbd9e036343742630b481042d99bdda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
