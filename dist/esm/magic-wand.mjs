export const name="magic-wand";
export const id="dl_6dfe07cc59e74248a784";
export const url=new URL("../icons/magic-wand.svg?v=c26ed0a1de49a4b8d9fb2d8c562521e3786a2bf53c83ff4e49bd5cd60cf567ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
