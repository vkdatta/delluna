export const name="tab_new_right-fill";
export const id="dl_4640986f93786bcec5f2";
export const url=new URL("../icons/tab_new_right-fill.svg?v=66371e69d0bc2541b94c877834b8799c856b9012dd7980e918a897d1627f83a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
