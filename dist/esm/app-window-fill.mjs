export const name="app-window-fill";
export const id="dl_d817206a374d49a99df9";
export const url=new URL("../icons/app-window-fill.svg?v=dd163b2cb9df05671a9eee73d362925fbf1e3caacf4cac87531ed51190e4cb84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
