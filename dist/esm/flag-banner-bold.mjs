export const name="flag-banner-bold";
export const id="dl_84b2ecd66a70409cb33b";
export const url=new URL("../icons/flag-banner-bold.svg?v=27e2283a49cf899e43e17f1ef36d513706bfe5016da9f14ff00298627c88069d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
