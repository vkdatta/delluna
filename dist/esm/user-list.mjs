export const name="user-list";
export const id="dl_300694d875625648df68";
export const url=new URL("../icons/user-list.svg?v=363861c4eac12e6a2a82c23461111086152e257c41c7ece0e139890649eeecd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
