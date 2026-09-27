export const name="museum-fill";
export const id="dl_904a68f4c902e7f13eac";
export const url=new URL("../icons/museum-fill.svg?v=1575fb3cb303f6c9a343fc1a3457cf70e03b5d7f94482062a47b04efbfba8275",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
