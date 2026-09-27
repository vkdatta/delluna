export const name="hourglass-fill";
export const id="dl_8a21f9d919e142448837";
export const url=new URL("../icons/hourglass-fill.svg?v=676dfd024274c1aa4324844721acf0b7ed2639243bbf9a8c08989bec7dfc135f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
