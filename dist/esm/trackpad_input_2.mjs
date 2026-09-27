export const name="trackpad_input_2";
export const id="dl_8ae112ef47ab105eafff";
export const url=new URL("../icons/trackpad_input_2.svg?v=5a6b36f0b1aff3d9f85edb119b7ae1d38a1921afc7caa0915fdd6a1f98e4c659",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
