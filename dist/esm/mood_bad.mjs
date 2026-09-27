export const name="mood_bad";
export const id="dl_4cea5422b2604307ab47";
export const url=new URL("../icons/mood_bad.svg?v=3569c7c236a6f0be65727fe37fdb391aeac2183e70978e92395d31edc4e96373",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
