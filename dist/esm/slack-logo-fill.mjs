export const name="slack-logo-fill";
export const id="dl_db35a6523b5a45d3ae97";
export const url=new URL("../icons/S/slack-logo-fill.svg?v=e94963d13d90528f0ada43d1ba008a871752964dbe3d02192442d87742557b02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
