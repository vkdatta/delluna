export const name="airlines-fill";
export const id="dl_542a6608b11e5d7b05dc";
export const url=new URL("../icons/airlines-fill.svg?v=233f54fb9a8bf6d2d7565b7c18a16b48a11f4acbf47b6673184968e520417361",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
