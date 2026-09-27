export const name="file-html-duotone";
export const id="dl_770cfcae627045fd8094";
export const url=new URL("../icons/file-html-duotone.svg?v=d46ff9c1f09c5fecaff83505650b1294841b130694e16641016e75b9fcb1dceb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
