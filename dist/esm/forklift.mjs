export const name="forklift";
export const id="dl_f234d14c66021027ab4c";
export const url=new URL("../icons/forklift.svg?v=4c057ea1d22ecbce447cd610525b81ca373a97c67b540e75f260c14a8d10b595",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
