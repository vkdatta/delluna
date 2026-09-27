export const name="behance-logo";
export const id="dl_a426b97a79204064a23d";
export const url=new URL("../icons/behance-logo.svg?v=a224b335e19b6248bd6e4c4107df43959409116b91e297970f3964a6dc6e992c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
