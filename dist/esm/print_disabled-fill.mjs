export const name="print_disabled-fill";
export const id="dl_32ee01dd85c14f34614a";
export const url=new URL("../icons/print_disabled-fill.svg?v=959991bc6650c2d79e8d91b58647cdfc3f41cb0b2484724aed8cbd82cf4ec2c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
