export const name="file-lock";
export const id="dl_83573da77cfb4be08a57";
export const url=new URL("../icons/file-lock.svg?v=ed127200fa190233bb411a9b26056a8f38492a9fedca0300450e41f92ca9570f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
