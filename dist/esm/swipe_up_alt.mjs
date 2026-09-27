export const name="swipe_up_alt";
export const id="dl_a79cf901eab87d5b648c";
export const url=new URL("../icons/swipe_up_alt.svg?v=be4fa2e8c984588668ef0cfd1181059594c916fdcb45a0d57cf2bb74f791f4df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
