export const name="person-simple-hike-fill";
export const id="dl_18b03b71818b42f8a56a";
export const url=new URL("../icons/person-simple-hike-fill.svg?v=ca039ff88e95c9a781f93859b1b9c63671274785f072e9d80d56de90d72cba10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
