export const name="lucid_3-rows-4";
export const id="dl_edb70d14c1fb475f8250";
export const url=new URL("../icons/lucid_3-rows-4.svg?v=725359f30145955c7e7b0e3942ef73a0168af4bc782b3cda216c6bd6e8ce7bdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
