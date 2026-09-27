export const name="lucid_1-circle-fading-arrow-up";
export const id="dl_5e809ce5532340b5bc85";
export const url=new URL("../icons/lucid_1-circle-fading-arrow-up.svg?v=ab3c8f6928c995e7c77d888a78853a34b41a4481ede8e252c20ce56ee4e20d05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
