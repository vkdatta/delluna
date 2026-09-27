export const name="telescope";
export const id="dl_79a217c815df40569378";
export const url=new URL("../icons/telescope.svg?v=6b154c93456809bd265f7a23d2f9bdfc084254474b4cadfd2bac825603b4288b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
