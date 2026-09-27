export const name="warning-diamond-bold";
export const id="dl_faf685e82212df8a88a3";
export const url=new URL("../icons/warning-diamond-bold.svg?v=ac06b7af8ba0b5edc226798339d401c93cfd5c3b8a31650bcc38aa50889a3744",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
