export const name="brightness_alert-fill";
export const id="dl_3611565df16351d14bf7";
export const url=new URL("../icons/brightness_alert-fill.svg?v=fbb3fc9d8f6dd218734686f5581f9891b5b9cfa16787e52571c71b729d7c3eda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
