export const name="remember_me";
export const id="dl_b77a7a9b0e874908a3d4";
export const url=new URL("../icons/remember_me.svg?v=b9455dfb6673caa1938000d300f1cef799e60473b9386cfcf60c0ad2d856d936",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
