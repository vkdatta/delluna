export const name="chevron_line_up";
export const id="dl_8da3b1fcf4a794f953a7";
export const url=new URL("../icons/chevron_line_up.svg?v=9cfb82420856f94f393320826c748a0fc97518689883b494645cfd4c7243f776",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
