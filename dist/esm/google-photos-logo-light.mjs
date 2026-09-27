export const name="google-photos-logo-light";
export const id="dl_9ae0f6982e4f4098a473";
export const url=new URL("../icons/google-photos-logo-light.svg?v=9cdb52797cdc5f59a11ddeb347b8792a3594b80d216ad81cd3c2e30e278ed3d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
