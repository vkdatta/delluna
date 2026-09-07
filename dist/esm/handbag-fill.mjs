export const name="handbag-fill";
export const id="dl_5fbc27872edf4767a73d";
export const url=new URL("../icons/handbag-fill.svg?v=b96ffd15716f22d4438482216ed809f3280ff3ba0e4c228a305339dc2299f1e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
