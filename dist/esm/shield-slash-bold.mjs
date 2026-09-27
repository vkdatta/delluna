export const name="shield-slash-bold";
export const id="dl_95cdd4e6b8770dc030af";
export const url=new URL("../icons/shield-slash-bold.svg?v=fb0cc0c4c641d2f365a31b645f1ca4736639ae53ac27215519909cb5bd1d876e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
