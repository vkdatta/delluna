export const name="wand_shine-fill";
export const id="dl_4af3dcacb85a43bda0c2";
export const url=new URL("../icons/W/wand_shine-fill.svg?v=ed7af074392661e9251f1b82ef83c145d476344333708d4357d10dce5e481d21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
