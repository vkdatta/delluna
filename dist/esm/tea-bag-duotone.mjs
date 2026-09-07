export const name="tea-bag-duotone";
export const id="dl_eadc0e9f2d8c4dee84ea";
export const url=new URL("../icons/T/tea-bag-duotone.svg?v=b8d3dbc3de8ed289419adb3d1b281689c8f232315b26175a6cfc89910d6e05a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
