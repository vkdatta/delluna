export const name="framer-logo-light";
export const id="dl_b1931312d86641ac943a";
export const url=new URL("../icons/framer-logo-light.svg?v=4688f51d8df36bf1b5a290b26dd052d8ea60ada92f5ef184776a6221a3541603",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
