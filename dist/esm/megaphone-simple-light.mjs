export const name="megaphone-simple-light";
export const id="dl_f709af99c4c4425aaf0d";
export const url=new URL("../icons/megaphone-simple-light.svg?v=33695ef45771e647eea22112cd804d6ac22975f3bf9f42261fc82fd192c078cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
