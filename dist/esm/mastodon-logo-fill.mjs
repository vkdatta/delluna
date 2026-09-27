export const name="mastodon-logo-fill";
export const id="dl_74f93ab7628b4db4a153";
export const url=new URL("../icons/mastodon-logo-fill.svg?v=2d1b6ae32469135a19f3f7a6acadf91573569ba2c72cf9ffaabf740845906a6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
