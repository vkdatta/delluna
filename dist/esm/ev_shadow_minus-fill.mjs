export const name="ev_shadow_minus-fill";
export const id="dl_8dd5db7c92c48dee5ef1";
export const url=new URL("../icons/ev_shadow_minus-fill.svg?v=b324bc00bde38f6af5fb19fccfbebbe3824ebe4662d1196750baedbd9674a794",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
