export const name="route";
export const id="dl_e835657c69a6a4ea5070";
export const url=new URL("../icons/route.svg?v=643080451391fad7cd015f29f20049d34708b3f25f653fc822f766f3a7563cf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
