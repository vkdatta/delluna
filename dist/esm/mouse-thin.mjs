export const name="mouse-thin";
export const id="dl_8df4701e664c4c4a8fc4";
export const url=new URL("../icons/mouse-thin.svg?v=7c181b8d85714056f1dbbfd071f84d92f6ff3a532707991042fc70833641740e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
