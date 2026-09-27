export const name="skip-back-circle-bold";
export const id="dl_9b003861df687d09c9a5";
export const url=new URL("../icons/skip-back-circle-bold.svg?v=8f0c624b42598ab8fe87f617eeb07fce51b9a619b7d4f3638d29f25feeea85de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
