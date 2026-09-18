export const name="view_array-fill";
export const id="dl_529fb6ff9d794707a689";
export const url=new URL("../icons/view_array-fill.svg?v=9d715624bf4777a1b22c5f53c5a3a1e128e313123b78aadc4326a3a36b083cfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
