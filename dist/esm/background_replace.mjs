export const name="background_replace";
export const id="dl_9b06184da0755bf82b12";
export const url=new URL("../icons/background_replace.svg?v=7317838ad2c7a5eda95330b57f673de714317d11d0d5e4be19295f879298b8b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
