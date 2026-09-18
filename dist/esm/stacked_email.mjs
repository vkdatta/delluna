export const name="stacked_email";
export const id="dl_cd171864971b4a10a8a0";
export const url=new URL("../icons/S/stacked_email.svg?v=21b5a460c9f84715cbb290b333913d592c24cd1d5977a8103b87cb309ca5cfed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
