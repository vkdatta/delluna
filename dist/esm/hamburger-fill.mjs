export const name="hamburger-fill";
export const id="dl_80b921ccd73949ecbb05";
export const url=new URL("../icons/hamburger-fill.svg?v=d2dc516a049e597c92ea7f33babaac6af73a212a9cd7c3e35f117d5c8cec03f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
