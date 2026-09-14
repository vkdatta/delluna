export const name="auto_stories_off";
export const id="dl_6cdb79d15c6743378aef";
export const url=new URL("../icons/A/auto_stories_off.svg?v=f2456aa7d9a11972c783811ec1361bdb80054f248ab9aa601824850eabf20c40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
