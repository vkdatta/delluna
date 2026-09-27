export const name="lucid_1-bot";
export const id="dl_811361a8220844e7ba8c";
export const url=new URL("../icons/lucid_1-bot.svg?v=ff0eb4b69e969408ea7d612cf6c09733b5d30f38896efbae75511084643bb761",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
