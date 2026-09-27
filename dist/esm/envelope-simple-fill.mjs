export const name="envelope-simple-fill";
export const id="dl_7326117399f7478b8024";
export const url=new URL("../icons/envelope-simple-fill.svg?v=10e71c4371b9cba0c592598f7c285ac59b29c720917b981b89b8c84c31808bb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
