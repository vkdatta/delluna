export const name="valve";
export const id="dl_327ee81e8db52ede82bd";
export const url=new URL("../icons/valve.svg?v=7b7032a7d5c492f0d167ca52dc2f46e94f7628ee882d62f237b6aa4fe0fe0fe1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
