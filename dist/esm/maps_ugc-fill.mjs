export const name="maps_ugc-fill";
export const id="dl_67817553e1a16b284c43";
export const url=new URL("../icons/maps_ugc-fill.svg?v=e5615736eaac32225786e4549588e6c170cb89b69f60de8627b5d8f4f6407ac5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
