export const name="lucid_2-dollar-sign";
export const id="dl_b9326036c0a343b2bec5";
export const url=new URL("../icons/lucid_2-dollar-sign.svg?v=c6213c38e2eecb6b8fa139ab9c5132d796e96e3bbeef29dd573b5e56779a7570",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
