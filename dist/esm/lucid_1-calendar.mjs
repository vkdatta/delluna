export const name="lucid_1-calendar";
export const id="dl_90035d3df5ba4a14805c";
export const url=new URL("../icons/lucid_1-calendar.svg?v=01c156518feb6240fb227ad9c46b4fe846bdbdb211cefe1a2f53f3f113545966",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
