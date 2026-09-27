export const name="front_loader-fill";
export const id="dl_5324a5dfed1ca3e69ca1";
export const url=new URL("../icons/front_loader-fill.svg?v=b5117899342f7b0bef83ec2e057247de7cece3723bbf531966d895d241157765",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
