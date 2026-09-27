export const name="background_dot_large";
export const id="dl_3fd52171991b8295876f";
export const url=new URL("../icons/background_dot_large.svg?v=cd6d9b9c251ba4fb4d0b6f3850cddab7f71a7ac8c4c140811c57ad402dfa9506",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
