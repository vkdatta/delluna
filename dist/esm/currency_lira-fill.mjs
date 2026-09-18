export const name="currency_lira-fill";
export const id="dl_83992df0607b4a63ad27";
export const url=new URL("../icons/currency_lira-fill.svg?v=9f0d76b1c62925b8b1baae97eb8a82fd89c431340bae1411edc8939b061af5b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
