export const name="table_edit-fill";
export const id="dl_12765c7734ee3fe98553";
export const url=new URL("../icons/table_edit-fill.svg?v=5332c3f2cc16525b5f4e70968e160f57a936bf9db076ecbe34be2ef2a2b466b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
