export const name="media_link-fill";
export const id="dl_e0515b9091147dff9899";
export const url=new URL("../icons/media_link-fill.svg?v=f3055f1fda9990014ac9f625949968d3166e83381bf9638c54fd251386a64c26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
