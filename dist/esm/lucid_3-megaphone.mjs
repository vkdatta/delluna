export const name="lucid_3-megaphone";
export const id="dl_d42799d345aa42f28a4e";
export const url=new URL("../icons/lucid_3-megaphone.svg?v=ef96fc86083079a81870ba392805044ded6ad155aafc9381b4c3b4d38715f237",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
