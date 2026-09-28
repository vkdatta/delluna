export const name="frame_bug";
export const id="dl_f784222ff0ae9d4a85e1";
export const url=new URL("../icons/frame_bug.svg?v=7cb11748a39244b7b7b795a2445143ae537d7123bdf6edd53ecbf832a1ad783e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
