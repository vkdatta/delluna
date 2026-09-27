export const name="vertical_shades_closed-fill";
export const id="dl_79a67e89a420f1ee07b5";
export const url=new URL("../icons/vertical_shades_closed-fill.svg?v=cb300e809214feb70f87fa2ba9de17ff6beda4ba19eb7f255dabb5d142a8f644",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
