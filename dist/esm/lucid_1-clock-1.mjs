export const name="lucid_1-clock-1";
export const id="dl_25228b02833f44f3bf8d";
export const url=new URL("../icons/lucid_1-clock-1.svg?v=941c6dd5c4933011fcd3355510d39d2e2010f995ca97f699fb271b380ce2129f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
