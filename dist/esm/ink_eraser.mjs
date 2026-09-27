export const name="ink_eraser";
export const id="dl_9c935d1c0425067db68d";
export const url=new URL("../icons/ink_eraser.svg?v=f1f34d859276fda542120105490ec3ff676094294e0a90a29e03c44a9bfa338e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
