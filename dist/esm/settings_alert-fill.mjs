export const name="settings_alert-fill";
export const id="dl_3f3d2fbb3cdabd057c65";
export const url=new URL("../icons/settings_alert-fill.svg?v=576e819ddb9956e9df44d3e0d42e71c6e04f7b6f060118881ec9645e3332a933",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
