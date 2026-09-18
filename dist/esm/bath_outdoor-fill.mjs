export const name="bath_outdoor-fill";
export const id="dl_ee4f2d2a200842d3b91f";
export const url=new URL("../icons/bath_outdoor-fill.svg?v=1fc463112e057504b05ac5805dc150ccee0814e5909a09715a017cd8b05897a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
