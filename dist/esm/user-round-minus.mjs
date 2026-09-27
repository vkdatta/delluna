export const name="user-round-minus";
export const id="dl_8eb816fcad7c4a9c9ea1";
export const url=new URL("../icons/user-round-minus.svg?v=43feb17b5c13c3a6c44434f63b77a4d896350b3d55bbe28651c7679e5fcd5ead",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
