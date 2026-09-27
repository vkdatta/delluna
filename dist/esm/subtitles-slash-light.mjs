export const name="subtitles-slash-light";
export const id="dl_dc5b82b4e777efb5c377";
export const url=new URL("../icons/subtitles-slash-light.svg?v=98aaa6c1e1b067075baf08a3feae10b2257f7795086f93fd7268b213f35a682d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
