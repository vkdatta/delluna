export const name="tote-thin";
export const id="dl_fc81fb2ef7c944198f41";
export const url=new URL("../icons/T/tote-thin.svg?v=3f008098e5a7f31066f68a5f62a5e611a76fa4de72f08a1f770d0710f2599f93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
