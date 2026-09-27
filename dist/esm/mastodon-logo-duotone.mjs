export const name="mastodon-logo-duotone";
export const id="dl_c26fbd648b094cc8aa8b";
export const url=new URL("../icons/mastodon-logo-duotone.svg?v=08fa5eca01d37aaa8f3d6e3e45a4182a634e4944275ea0c7030b19a12353ebca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
