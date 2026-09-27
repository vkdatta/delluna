export const name="fire-simple";
export const id="dl_72e795ea7461450ba9cc";
export const url=new URL("../icons/fire-simple.svg?v=6a30661285d1cbf517ec029ce61eace62488b90dda7fd2928217652e9e4ebd04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
