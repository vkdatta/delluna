export const name="toys-fill";
export const id="dl_2e9c07d3f1864f9b9acc";
export const url=new URL("../icons/T/toys-fill.svg?v=7fe0a31e344c6f3ef5b970adb0e2faed246d8b65fde9f379cd675051b7eb5395",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
