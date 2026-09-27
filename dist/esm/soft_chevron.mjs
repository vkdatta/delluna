export const name="soft_chevron";
export const id="dl_3d16a0a94721480392de";
export const url=new URL("../icons/soft_chevron.svg?v=7d75f809662b01785f69bd2e6c81bd2afa54bb94b6a70e668450d702d9a65572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
