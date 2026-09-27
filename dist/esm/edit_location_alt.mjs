export const name="edit_location_alt";
export const id="dl_3fbdef99f1e719665ffe";
export const url=new URL("../icons/edit_location_alt.svg?v=94f47759d406c0f0ed11e38031824e0777fd5146487fcf912846a798fe2b523f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
