export const name="square-pi";
export const id="dl_27c979c38abb407bb26a";
export const url=new URL("../icons/square-pi.svg?v=485368fd50e508d6c795f63c04c203e866baa6c6ff026029ea5c00cd1056a0ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
