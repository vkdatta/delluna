export const name="cast_warning-fill";
export const id="dl_e342ee9b6b3dfef5c8f4";
export const url=new URL("../icons/cast_warning-fill.svg?v=b4ae1cae0d80ab5237d75aa85c8e46619928b3f701f97b40baca82055a742b5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
