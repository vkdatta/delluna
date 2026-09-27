export const name="envelope-simple-open-fill";
export const id="dl_68e1cdd515dd4d7798ae";
export const url=new URL("../icons/envelope-simple-open-fill.svg?v=2979d26b9ccf00b89229961bf834eed8c036d2cd679842ee40526effc5bbb822",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
