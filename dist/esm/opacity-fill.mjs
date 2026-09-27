export const name="opacity-fill";
export const id="dl_d8c24d8942bad7b815ea";
export const url=new URL("../icons/opacity-fill.svg?v=44fb9595dbda9c5a16bb2dc7e7796dbc9768e7e7049ebc8a232ff37f8b349424",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
