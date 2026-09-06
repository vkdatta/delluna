export const name="hand-arrow-up-thin";
export const id="dl_452bb059daa241d089e8";
export const url=new URL("../icons/hand-arrow-up-thin.svg?v=992775ee0b2f45c990490a4408c6bc135a7c9a606f9809ac004a38ca5a69caf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
