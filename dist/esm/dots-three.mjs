export const name="dots-three";
export const id="dl_8f99c192f47c4fefbbe5";
export const url=new URL("../icons/dots-three.svg?v=f3658c539180305397f457799b7796a6447f3e8b24b5cfda8ccca46236c72a66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
