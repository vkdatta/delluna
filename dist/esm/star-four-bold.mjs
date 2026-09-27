export const name="star-four-bold";
export const id="dl_a30cdfa39bd5c4e45b74";
export const url=new URL("../icons/star-four-bold.svg?v=c8047e6fdc3b24bf463141d6ff40770c78598bca88bd6e7eff36735bea6b36be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
