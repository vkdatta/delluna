export const name="settings_input_svideo-fill";
export const id="dl_22d9df3f5fdf3330e9d4";
export const url=new URL("../icons/settings_input_svideo-fill.svg?v=cf973614584a55aa0499d3490e7417c46f647232b4bc40ad1fe6a5fa66147c98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
