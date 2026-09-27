export const name="sign_language";
export const id="dl_8281918b55356e1e2ee7";
export const url=new URL("../icons/sign_language.svg?v=20348e8060919e21700b25304594940aab1e48ae6ab3e01e0ca86b6f31fcb643",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
