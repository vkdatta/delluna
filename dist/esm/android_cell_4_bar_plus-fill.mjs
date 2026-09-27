export const name="android_cell_4_bar_plus-fill";
export const id="dl_7da89c0d94fa53fa3435";
export const url=new URL("../icons/android_cell_4_bar_plus-fill.svg?v=0accf9128c5b394420c72fe5e18581d4000c88b2fdb608b18a85b538cb4c0899",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
