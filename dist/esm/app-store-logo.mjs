export const name="app-store-logo";
export const id="dl_da69ddcbd866491ea62a";
export const url=new URL("../icons/app-store-logo.svg?v=41e4112b8f56579fec063afed69267e70cdac379f8bcee30f4bd40f969cbb747",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
