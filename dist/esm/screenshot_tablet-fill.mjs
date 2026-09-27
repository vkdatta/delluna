export const name="screenshot_tablet-fill";
export const id="dl_fb306e2e431685d60e35";
export const url=new URL("../icons/screenshot_tablet-fill.svg?v=8618939cc3b03fc005e4a6c816a5fa0d4e81442b411c0dc22fc60ba1db5850e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
