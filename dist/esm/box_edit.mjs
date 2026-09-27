export const name="box_edit";
export const id="dl_f336166c4c724f8bd201";
export const url=new URL("../icons/box_edit.svg?v=4a3cecefcd998a8303535de4d00bd0de42bfa82e6b0032dbc1bbede9cf99b82e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
