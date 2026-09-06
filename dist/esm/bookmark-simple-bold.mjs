export const name="bookmark-simple-bold";
export const id="dl_bce91a0c970647c2bec7";
export const url=new URL("../icons/bookmark-simple-bold.svg?v=10d2be281a40fb4042945403d5d6cda2d54bec06aace1aee795b05fa79dc946a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
