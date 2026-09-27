export const name="sphere";
export const id="dl_3c2de7e9aa0a24619e08";
export const url=new URL("../icons/sphere.svg?v=10a9a17327af552250a52220784f63beedf47cf782fff688a99055275d4b78fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
