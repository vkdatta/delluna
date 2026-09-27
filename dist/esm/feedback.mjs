export const name="feedback";
export const id="dl_9a65d150cde0e12166fb";
export const url=new URL("../icons/feedback.svg?v=8fdd3802a762f4043dd3355bf2c694a0e7d91d5fac74e35c45fccac7543b1325",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
