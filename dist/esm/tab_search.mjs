export const name="tab_search";
export const id="dl_adea88d7df5180ff5225";
export const url=new URL("../icons/tab_search.svg?v=53aa523d6545c40bdb5394e236808d5617d20f85dd7318cde2128a856f2d5a7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
