export const name="magnet-thin";
export const id="dl_0fcfd03f38184811820e";
export const url=new URL("../icons/magnet-thin.svg?v=63c9d60a2488acbb2dffd2e98e65d624048c62d40d24352cd6aded60912eb7db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
