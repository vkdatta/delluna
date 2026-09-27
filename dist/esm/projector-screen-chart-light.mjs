export const name="projector-screen-chart-light";
export const id="dl_1fbf2c5722f8493b8aa9";
export const url=new URL("../icons/projector-screen-chart-light.svg?v=b742e9d330113454ecd83912761712bb8a474a588e7976b6b5ae8fced3c89d65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
