export const name="display_settings";
export const id="dl_9635e4465f26eee8071b";
export const url=new URL("../icons/display_settings.svg?v=d76a502d9bfe2474e90e3221a53a51c10048ea42e31bd6207af55af04cc252ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
