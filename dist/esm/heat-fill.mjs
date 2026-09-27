export const name="heat-fill";
export const id="dl_1046ddd6c80ac664a4bd";
export const url=new URL("../icons/heat-fill.svg?v=cefde5341209f62ffe6c2fb0188aa5da6c80c581a4e2f2cebbf380f9c017e02e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
