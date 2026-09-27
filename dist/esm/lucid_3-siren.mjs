export const name="lucid_3-siren";
export const id="dl_995af2b50f3b42caad31";
export const url=new URL("../icons/lucid_3-siren.svg?v=f4d593aa59bd85db2cc949d60b13ce42246d9d37abd74b7b0bdf460935685a3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
