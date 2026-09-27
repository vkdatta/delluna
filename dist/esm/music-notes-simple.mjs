export const name="music-notes-simple";
export const id="dl_4f8c9680c39e41c48da1";
export const url=new URL("../icons/music-notes-simple.svg?v=95cd7444f59e2513f436d2d8cb8d9bdadef8945c579672e96c18411881653bc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
