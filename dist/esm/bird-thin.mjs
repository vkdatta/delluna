export const name="bird-thin";
export const id="dl_973c93e539054083b184";
export const url=new URL("../icons/bird-thin.svg?v=d39665419ac9bcfaabe7b719862529c673137773d59096cfc2f6c3d59ba09a27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
