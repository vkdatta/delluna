export const name="file-jpg-fill";
export const id="dl_44e40ce742584518a2c0";
export const url=new URL("../icons/file-jpg-fill.svg?v=452eb2381c33c37d4428f0edca676c2d15c329c79c62578e1db142e53acb521a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
