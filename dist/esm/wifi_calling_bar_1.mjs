export const name="wifi_calling_bar_1";
export const id="dl_86638df27f77f83bcb3f";
export const url=new URL("../icons/wifi_calling_bar_1.svg?v=5975b8d28878d1028c25f6c51a56152c203a1a43eefd8cfb2e1f93ecce864e2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
