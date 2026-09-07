export const name="unite-square-light";
export const id="dl_379b498278884a2ea8a2";
export const url=new URL("../icons/U/unite-square-light.svg?v=aa7b6d83356771dbe46778d360a32c8c51a93452a2188451bef4fe64f1ac8afe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
