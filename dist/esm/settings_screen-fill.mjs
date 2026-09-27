export const name="settings_screen-fill";
export const id="dl_c3755a1dcdabbc865d21";
export const url=new URL("../icons/settings_screen-fill.svg?v=84262643325838d608f8147d51dcafca7249944a11e105019ecf7b5625eceed6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
