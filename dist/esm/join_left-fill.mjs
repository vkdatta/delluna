export const name="join_left-fill";
export const id="dl_512c61ad87d2b988d4f4";
export const url=new URL("../icons/join_left-fill.svg?v=e2de3fbea0a36b67b4567e14b590abec4f5ed5e8f6c9fc80ef821128a547ebdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
