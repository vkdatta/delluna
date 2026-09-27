export const name="gitlab-logo-simple";
export const id="dl_69375c8b23444ff6b785";
export const url=new URL("../icons/gitlab-logo-simple.svg?v=38d6dca6f2b8fbea63edeaff106992bbcf4937901f9797fec7a58b3f70aa9807",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
