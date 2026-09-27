export const name="square_foot-fill";
export const id="dl_84553af83f69bca41ee4";
export const url=new URL("../icons/square_foot-fill.svg?v=93f32d61173abc55686d5054c4aed0d841d2b20cd346e735791458c905455ce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
