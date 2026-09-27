export const name="screen_search_desktop";
export const id="dl_4ef837fe0d76a58a90fb";
export const url=new URL("../icons/screen_search_desktop.svg?v=e7eef2b31e1ef4d0a837b455faaffd7cfeb1753925717152d0158e9df9d5feb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
