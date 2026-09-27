export const name="upi_pay-fill";
export const id="dl_ea383793e1b5dfb04267";
export const url=new URL("../icons/upi_pay-fill.svg?v=10b9294b4260c61efe0562209abeb6b341634fc2d25ec8153c8fb8b083322df1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
