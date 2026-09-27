export const name="waves-light";
export const id="dl_1d5dc08108e0c119e911";
export const url=new URL("../icons/waves-light.svg?v=c174cee807a892642ee48785b02cd297af1c9cf99eb84838bd8c7fc50b8a4653",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
