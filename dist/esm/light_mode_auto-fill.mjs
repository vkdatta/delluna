export const name="light_mode_auto-fill";
export const id="dl_26c16999b7b484799546";
export const url=new URL("../icons/light_mode_auto-fill.svg?v=cf12e3138c8a4818c760916b94f548b36c969bae64057e6ac43a26f2a2913f21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
