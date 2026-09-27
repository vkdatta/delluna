export const name="upgrade-fill";
export const id="dl_20c26dd543908d7d2131";
export const url=new URL("../icons/upgrade-fill.svg?v=d0ad9ded6492ac80d5a3113a69088dd75a46aae9c003eafb28268211d488ea2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
