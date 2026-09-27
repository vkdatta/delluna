export const name="twitch-logo";
export const id="dl_94f927c3ff771507284d";
export const url=new URL("../icons/twitch-logo.svg?v=61f03a7b47501817148ea7519836d3df13d3548e68fce6c7bf5672dc66d68935",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
