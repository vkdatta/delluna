export const name="settings_overscan";
export const id="dl_652c42ed80ed82eb0e3c";
export const url=new URL("../icons/settings_overscan.svg?v=2fbea30e9bc8c6e2c437d920bb6df990fa64087e8895f1efbde3b97826589098",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
