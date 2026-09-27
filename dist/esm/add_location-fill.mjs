export const name="add_location-fill";
export const id="dl_4bc329e043dbf469686e";
export const url=new URL("../icons/add_location-fill.svg?v=186b5773ccd223cbe7384c207fb08b0bf3371279b673a536df4404422cd91f10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
