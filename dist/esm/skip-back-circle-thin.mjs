export const name="skip-back-circle-thin";
export const id="dl_3fb0b11b8346df2513f9";
export const url=new URL("../icons/skip-back-circle-thin.svg?v=74d13edd5d197f42f4794a71f1c8aefde29e074fbd08198e0cf4039e65e86780",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
