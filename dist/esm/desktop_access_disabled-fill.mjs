export const name="desktop_access_disabled-fill";
export const id="dl_8cfdecd25b047e076cb6";
export const url=new URL("../icons/desktop_access_disabled-fill.svg?v=08534c174f0fd3c9ab0c2316bde79078e5ccfb3384bec31ba41501d35767fa9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
