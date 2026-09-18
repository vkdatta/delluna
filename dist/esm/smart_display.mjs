export const name="smart_display";
export const id="dl_61b9e7c46a064a11a760";
export const url=new URL("../icons/smart_display.svg?v=67047a8ea62a23503232704aa32ac6f48c783b19104a8b6ce2f45b8c0f6c9c4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
