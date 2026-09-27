export const name="chat_apps_script";
export const id="dl_c211c692e2673d859863";
export const url=new URL("../icons/chat_apps_script.svg?v=89fc0201509583a7e988f6229d7a41f4e630752fe164453c2273e8ff2f8b20c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
