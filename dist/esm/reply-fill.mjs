export const name="reply-fill";
export const id="dl_592fc45fce64fd07355e";
export const url=new URL("../icons/reply-fill.svg?v=fa0676a361fb13e45744fc61926b0ef5594db77b83138f1e0e6d40e520a6f5ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
