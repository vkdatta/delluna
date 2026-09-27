export const name="waterfall_chart-fill";
export const id="dl_16d06cb75e3ab031cf5b";
export const url=new URL("../icons/waterfall_chart-fill.svg?v=244dfc65b276bf2c54c7eab0f1fac1d100bc05e5053272354cb46cf101614bd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
