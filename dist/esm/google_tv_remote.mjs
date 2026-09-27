export const name="google_tv_remote";
export const id="dl_84ad779cc90b259f7265";
export const url=new URL("../icons/google_tv_remote.svg?v=61546e4f022a9bbc97f483b3dd7ee6f7bd7e83086ebb76269ecd82fe8aec8531",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
