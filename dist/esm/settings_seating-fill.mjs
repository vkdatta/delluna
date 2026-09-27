export const name="settings_seating-fill";
export const id="dl_0ac8a36e76e52fab0d83";
export const url=new URL("../icons/settings_seating-fill.svg?v=1da72141a900e95f56e195bed0495bd6705df90261d8df99ed128b33fbd23a97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
