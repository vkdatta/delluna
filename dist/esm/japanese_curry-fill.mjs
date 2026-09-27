export const name="japanese_curry-fill";
export const id="dl_bd1673aa4dd2721d1746";
export const url=new URL("../icons/japanese_curry-fill.svg?v=f057c6149fef7da9583eeddb606757ea9752adfe69f82ed84de1b283968cce47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
