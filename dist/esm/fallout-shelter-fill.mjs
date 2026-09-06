export const name="fallout-shelter-fill";
export const id="dl_18534b2c971a4efcb0fb";
export const url=new URL("../icons/fallout-shelter-fill.svg?v=7f292df2f4a3ae71a0941299cc852b88c7379bb2053f7fcca58b67c4a9663faf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
