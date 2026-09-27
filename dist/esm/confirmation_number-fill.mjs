export const name="confirmation_number-fill";
export const id="dl_da483e6795d71acea3d0";
export const url=new URL("../icons/confirmation_number-fill.svg?v=b07c43c7e65a57411456bf2a398281fe61d53b1ad3457cde69c43451c41a9f93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
