export const name="lucid_3-shield";
export const id="dl_2f8fcb2a7f71476db6e7";
export const url=new URL("../icons/lucid_3-shield.svg?v=9ac02017ea49f608a36788be2d6b68fca29b6a5e5078ea7307becbd80cf258e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
