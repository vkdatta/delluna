export const name="night_sight_auto_off";
export const id="dl_9b432ba9c84f487396d6";
export const url=new URL("../icons/N/night_sight_auto_off.svg?v=3504538913c7680d389f414d6ba283d3aeefb07036bf0d14e158f5dbe7fbb81b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
