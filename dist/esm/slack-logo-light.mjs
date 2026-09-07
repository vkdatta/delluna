export const name="slack-logo-light";
export const id="dl_2e7d2893520f437c8b4c";
export const url=new URL("../icons/S/slack-logo-light.svg?v=9970580927ddf86919a4d7b303984b0d6b8ba26468de873da01a25de1542c386",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
