export const name="settings_brightness";
export const id="dl_f0697634a99f358a4f26";
export const url=new URL("../icons/settings_brightness.svg?v=4cbb09988fb34162259d2cdc68c2bfac166a8957ff0c999f8cc779278806cf30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
