export const name="cloud-x-thin";
export const id="dl_eb34554bc2a14e8ab258";
export const url=new URL("../icons/cloud-x-thin.svg?v=3ebffbf5f0b3fcfce4aa72b742f9026251c6c36e83f9a439a3ce72f61e8bfbfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
