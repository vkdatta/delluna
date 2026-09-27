export const name="lucid_2-list-minus";
export const id="dl_06c6806e1353495bbbc5";
export const url=new URL("../icons/lucid_2-list-minus.svg?v=cac63681725d70f09f7aafb0f7dea69c3e7b4cd4015d8365500d2296a72193ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
