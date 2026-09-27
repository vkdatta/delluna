export const name="verified";
export const id="dl_25d090d4117350cbc58c";
export const url=new URL("../icons/verified.svg?v=991444058a9f601cbd97bf30628e064a6af033aa752913334d987e6ada0f87ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
