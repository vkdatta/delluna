export const name="live_help-fill";
export const id="dl_63df2fdf15907a9124bd";
export const url=new URL("../icons/live_help-fill.svg?v=9f8325cad6bca8703c18ca45f5320d316fd8a0ccd3693751a69228c0f018eb92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
