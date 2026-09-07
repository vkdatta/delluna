export const name="speaker-simple-low-fill";
export const id="dl_7ad1b8a7857e411fabd2";
export const url=new URL("../icons/S/speaker-simple-low-fill.svg?v=d4baf49a480052c9d45ca10e32c72a66e84285e06b183a7a1b3a5e7a4cb46ca8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
