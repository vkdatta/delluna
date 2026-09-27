export const name="lightbulb-filament-bold";
export const id="dl_ef0c8acc11ef451f91b9";
export const url=new URL("../icons/lightbulb-filament-bold.svg?v=cd0227a42f9b9848e7c828e3da98253c7538fa253056fd05c8d56312f1454d88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
