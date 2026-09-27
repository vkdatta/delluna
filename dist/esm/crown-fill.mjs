export const name="crown-fill";
export const id="dl_6b23fab2afa24bdf931e";
export const url=new URL("../icons/crown-fill.svg?v=e375c43bc8482dd25300ff5468e2a28f81a9b94d4b568c67c031a44e1873d94f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
