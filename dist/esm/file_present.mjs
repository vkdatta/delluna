export const name="file_present";
export const id="dl_5ee1463cd28a4d454728";
export const url=new URL("../icons/file_present.svg?v=e034c73a9f3da06c90def84a17200aa70b5a0e62ae4f0baa961c234650b86f8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
