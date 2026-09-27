export const name="pregnancy-fill";
export const id="dl_9f6558e8f69edffba959";
export const url=new URL("../icons/pregnancy-fill.svg?v=8e059ac4d127341f82e1ab47dd4af77c6dc9fb4ae41548a25106aee21d8b614b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
