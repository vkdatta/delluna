export const name="sidebar-simple-light";
export const id="dl_6f41fd4aa214c71dbec2";
export const url=new URL("../icons/sidebar-simple-light.svg?v=b88aa1c0a6852d7b56559d913923a47712fc1ab8d062ab6bebe2f4e53017bbb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
