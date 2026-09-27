export const name="caret-circle-left-fill";
export const id="dl_711b641d4f8c4ae9ab8c";
export const url=new URL("../icons/caret-circle-left-fill.svg?v=83027a0295882b3dc69fa18c5d3ba6b181b0084a9ccb18e027c2373121cfb306",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
