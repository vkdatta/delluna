export const name="note_alt";
export const id="dl_ae2c62d1f70f4cb4ac62";
export const url=new URL("../icons/note_alt.svg?v=e42b89d0612c7ae6d449ff0e2f85a7af59cdfbe89a431074fc9d79d529d90545",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
