export const name="search_check-fill";
export const id="dl_92e7c213671c54816b75";
export const url=new URL("../icons/search_check-fill.svg?v=3ab20356f84916fbcc9fca79152a56b076ec8ad395d16a692f0b643c3ede7958",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
