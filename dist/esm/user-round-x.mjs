export const name="user-round-x";
export const id="dl_c8c612b1942f4e649a8d";
export const url=new URL("../icons/user-round-x.svg?v=74f5748aa68d14bd02f1093325f793d885e9e461b8d39449b76b4b671e936022",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
