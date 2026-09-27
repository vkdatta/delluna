export const name="mop";
export const id="dl_25d046196e9778f59ad1";
export const url=new URL("../icons/mop.svg?v=037a0c2185fe50cbaa8248aa7f6ae05d5fb1f93661ab4b202dba7849fc7968dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
