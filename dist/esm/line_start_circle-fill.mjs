export const name="line_start_circle-fill";
export const id="dl_b8382e0efcae142ca051";
export const url=new URL("../icons/line_start_circle-fill.svg?v=cb46567863fa567338d86f116f70ba992a89fa4951aae9d744c0a5d4c60cc432",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
