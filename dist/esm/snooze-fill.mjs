export const name="snooze-fill";
export const id="dl_5b562b511e674c3283e9";
export const url=new URL("../icons/snooze-fill.svg?v=4d8d537539b6d9ca9cb2ae80d6a02e52757437d3cc32906f48e08855523c09f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
