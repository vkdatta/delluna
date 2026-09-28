export const name="mobile_text";
export const id="dl_1171acf0be0cc0cf7034";
export const url=new URL("../icons/mobile_text.svg?v=6136aa56a67cf52f27828b621f42acd120bc51078f50d252eb37ffcaced29982",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
