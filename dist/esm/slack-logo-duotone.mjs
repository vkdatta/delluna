export const name="slack-logo-duotone";
export const id="dl_02ed9dc63e699294389c";
export const url=new URL("../icons/slack-logo-duotone.svg?v=a4454f112fbee806568652a0fa8501a936d111873aaaa522136a79216f40eeb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
