export const name="lucid_2-locate-fixed";
export const id="dl_e7a6afbc6e4f4918a3a2";
export const url=new URL("../icons/lucid_2-locate-fixed.svg?v=80aa5ccf6d10305b93f69d656fe139e3be89e57ab27d82c00787ecdc871d1107",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
