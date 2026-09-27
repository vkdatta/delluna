export const name="reset_shadow-fill";
export const id="dl_2c2b2634b8a7e577b93f";
export const url=new URL("../icons/reset_shadow-fill.svg?v=04ad0b9edd9ef5bef55acaf793d3de9af9c25916a860dd11a8a47427d237c327",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
