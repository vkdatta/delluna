export const name="text_rotation_down-fill";
export const id="dl_702264b6cea8d4115eb1";
export const url=new URL("../icons/text_rotation_down-fill.svg?v=39e43cbed0512c75994dfc49e40333d276a7c3d703686d6690b141aeab72516f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
