export const name="align-right-fill";
export const id="dl_6f580abd1050446d84ff";
export const url=new URL("../icons/align-right-fill.svg?v=c09099d084847ea27e50c0a05997ded4eafd0ba2b9d3f75927b2bcef778329e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
