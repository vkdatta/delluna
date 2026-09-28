export const name="language_us-fill";
export const id="dl_7f52b4d910510b7fa753";
export const url=new URL("../icons/language_us-fill.svg?v=4a994f9f34a5328121f7eaef2f255c50fa73d79f64648afff1f0575516373f9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
