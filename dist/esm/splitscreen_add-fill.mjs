export const name="splitscreen_add-fill";
export const id="dl_05aa9adfc156156ac931";
export const url=new URL("../icons/splitscreen_add-fill.svg?v=1b2a800e20c67dabb864a7d01350782aff686f5e173e4cef88bd866274238bfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
