export const name="lucid_1-circle-fading-plus";
export const id="dl_5c5b305f55854ae3bb6e";
export const url=new URL("../icons/lucid_1-circle-fading-plus.svg?v=6ce7627ae0d6d3ff9bd9dfdaa50ce6f26f595f4f71ea8e676ee476faefdd4759",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
