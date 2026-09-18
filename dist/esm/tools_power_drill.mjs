export const name="tools_power_drill";
export const id="dl_2f5780ed878d4fada8a0";
export const url=new URL("../icons/tools_power_drill.svg?v=b69d45864b3ab5b2e9b3de77e742a05bd9352186ff6b62eac984c4a5559885f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
