export const name="group_work";
export const id="dl_cb608b72cef949d580a7";
export const url=new URL("../icons/group_work.svg?v=798d1e565497bf4eb6d7b2c926705f4534d8f78a6246df758a48bb8be2040932",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
