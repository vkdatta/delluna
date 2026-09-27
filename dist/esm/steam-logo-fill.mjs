export const name="steam-logo-fill";
export const id="dl_3f564631e19e445b986e";
export const url=new URL("../icons/steam-logo-fill.svg?v=7fceab5d94e42d241153d34d340873365bae1c321a3a30c6c3f67eb81719bbb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
