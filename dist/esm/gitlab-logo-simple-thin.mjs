export const name="gitlab-logo-simple-thin";
export const id="dl_c36abaf4757644d1b8da";
export const url=new URL("../icons/gitlab-logo-simple-thin.svg?v=1c6652aa37fab130aac3fe203d6e0cdebef5db961c51c19cc420568b5f93338e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
