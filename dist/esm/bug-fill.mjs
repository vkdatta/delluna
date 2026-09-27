export const name="bug-fill";
export const id="dl_330797ef80ad4c6dbbae";
export const url=new URL("../icons/bug-fill.svg?v=d9f01e264077a70083285db8f9f89902b70ab49a9f7c59d1186b6a70d818240d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
