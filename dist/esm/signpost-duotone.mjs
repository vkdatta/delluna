export const name="signpost-duotone";
export const id="dl_150f9baf828cec5b8ea5";
export const url=new URL("../icons/signpost-duotone.svg?v=d58446cc057b19facb933bcd0ad3a57a9ba152f9167132d5f83642e779ced0aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
