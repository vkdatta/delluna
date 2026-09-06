export const name="mastodon-logo-fill";
export const id="dl_74f93ab7628b4db4a153";
export const url=new URL("../icons/mastodon-logo-fill.svg?v=f9d1bf489b16a34763aa7f8e8de62f72812cb9888fd92bbc47eeac33d1426122",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
