export const name="settings_heart";
export const id="dl_4eca8f2140f143ec0a49";
export const url=new URL("../icons/settings_heart.svg?v=3c641de6f1c28faad0cab14c9b511653728ef547b645878c74994ea97873db9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
