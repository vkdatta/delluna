export const name="gitlab-logo-simple-thin";
export const id="dl_c36abaf4757644d1b8da";
export const url=new URL("../icons/gitlab-logo-simple-thin.svg?v=e235f4ddd7f59e7252c02e84f35ef551ec347cc415d5c46bcf6f9a0ef6e5a511",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
