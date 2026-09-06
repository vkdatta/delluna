export const name="app-window";
export const id="dl_92aed84ac14c45f39693";
export const url=new URL("../icons/app-window.svg?v=652a65a43b5d8981c0146731c7ede101690636c90ac26c118a50b0ab73309be5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
