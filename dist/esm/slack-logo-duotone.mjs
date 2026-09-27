export const name="slack-logo-duotone";
export const id="dl_a182dffc3c5f7720bbfe";
export const url=new URL("../icons/slack-logo-duotone.svg?v=2f12487a530ec86412e9412104545c37abec75a4c9026584d89ed59ca0785d1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
