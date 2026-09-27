export const name="mode_comment-fill";
export const id="dl_a2ae790c582ad4531f74";
export const url=new URL("../icons/mode_comment-fill.svg?v=15e07b1cc361e456e7b2038a6e56e80bfa0ac5d162d7cfa151353ed5c9999c83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
