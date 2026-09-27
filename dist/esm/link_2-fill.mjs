export const name="link_2-fill";
export const id="dl_002726fea2c1ed32e376";
export const url=new URL("../icons/link_2-fill.svg?v=e8352404142e6166025804899d54f4f3a43dc93c0547d9dcff1049748c764a2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
