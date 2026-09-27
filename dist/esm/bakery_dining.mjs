export const name="bakery_dining";
export const id="dl_194196a441dbe39bf55f";
export const url=new URL("../icons/bakery_dining.svg?v=90c39f48cdcde370857325bb92036e4a081d209fcfefc2adee81258fe68e2e3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
