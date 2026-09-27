export const name="expand_circle_up";
export const id="dl_dc75f8796fb9953af79d";
export const url=new URL("../icons/expand_circle_up.svg?v=e0ef6563211c20defb36a4ace68b44ab63347aa13697753dede5769d161ef570",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
