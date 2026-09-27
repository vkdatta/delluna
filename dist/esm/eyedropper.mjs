export const name="eyedropper";
export const id="dl_daedf63268f04fe29ce5";
export const url=new URL("../icons/eyedropper.svg?v=b88cc0eb4b64bb7090cae8343d5dd48743baff19ab2bcef067a014bf9f25c4b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
