export const name="directions-fill";
export const id="dl_475f6998e7a7468bbb1d";
export const url=new URL("../icons/directions-fill.svg?v=cc9a761311f8a4e5cfe22eaff79a44c22fd4c1efc072181cc69036c1005d99b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
