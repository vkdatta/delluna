export const name="dots-three";
export const id="dl_8f99c192f47c4fefbbe5";
export const url=new URL("../icons/dots-three.svg?v=f29244462a8490a67507e098ccedb2c97c70c7902bd56c8dff32b206f5f61065",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
