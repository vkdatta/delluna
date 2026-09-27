export const name="magnify_fullscreen-fill";
export const id="dl_8a06570a9eceeadf7c06";
export const url=new URL("../icons/magnify_fullscreen-fill.svg?v=83f3ac6e285c6de9ce9dc371b77308f98f7747812d76bfdfd7952c1a32c18a57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
