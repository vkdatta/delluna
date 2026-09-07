export const name="user-list";
export const id="dl_56d71d87cbd54671a263";
export const url=new URL("../icons/U/user-list.svg?v=363861c4eac12e6a2a82c23461111086152e257c41c7ece0e139890649eeecd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
