export const name="mastodon-logo-fill";
export const id="dl_74f93ab7628b4db4a153";
export const url=new URL("../icons/mastodon-logo-fill.svg?v=26442db1400f5d9ca493af5d7c73f4a5a784c62070d352738b8c4e3e01645d49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
