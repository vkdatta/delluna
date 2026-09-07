export const name="warning-octagon-fill";
export const id="dl_62296c069cd84711b717";
export const url=new URL("../icons/W/warning-octagon-fill.svg?v=2580983c45d02ffce34fdbecc176c5cb127746b03293c827fd6ff3b1793c2e8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
