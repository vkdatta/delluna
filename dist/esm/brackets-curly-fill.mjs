export const name="brackets-curly-fill";
export const id="dl_1b56e0834cb445ca828f";
export const url=new URL("../icons/brackets-curly-fill.svg?v=c2531d269aeec03244fc77285e8e387372ebd9530a55f7a3c09622c920777691",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
