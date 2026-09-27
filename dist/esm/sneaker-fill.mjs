export const name="sneaker-fill";
export const id="dl_91ed9fc0e1565766bded";
export const url=new URL("../icons/sneaker-fill.svg?v=a1a69afbf1a0adb78fa73846e93aaa08959756863c1036605a02a934774a3124",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
