export const name="list-heart-thin";
export const id="dl_61006c49da924e9da583";
export const url=new URL("../icons/list-heart-thin.svg?v=4204558ba2a58f1395fc37b3c5aa0b1e0b670ad884f74726c9b39c8dda78d4d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
