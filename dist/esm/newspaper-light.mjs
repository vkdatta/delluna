export const name="newspaper-light";
export const id="dl_3488ee432ca248bf905a";
export const url=new URL("../icons/newspaper-light.svg?v=c3b02afcc13008351eb925c6cffa1b20ef365a39f709a2c5aa80a609428ea243",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
