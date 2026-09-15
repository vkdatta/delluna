export const name="face_nod";
export const id="dl_19f045d6ef6d45799a17";
export const url=new URL("../icons/F/face_nod.svg?v=119966b43cc352604586275da45ed56ff5b8e629a82c17f49af47a94ac0a1448",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
