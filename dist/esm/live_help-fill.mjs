export const name="live_help-fill";
export const id="dl_143fd7aa3e9a5960a040";
export const url=new URL("../icons/live_help-fill.svg?v=8353486af7dc9ea1ad4731ad354cccd5f55dbe5dd675a6545ff4e8101a46a64e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
