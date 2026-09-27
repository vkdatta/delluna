export const name="lucid_1-app-window-mac";
export const id="dl_3e271d22e5b0442e864b";
export const url=new URL("../icons/lucid_1-app-window-mac.svg?v=b54f29d56b0df899e88cfcf3867ed5aff88df42332bbe8c9a2653bc4c0f9e6e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
