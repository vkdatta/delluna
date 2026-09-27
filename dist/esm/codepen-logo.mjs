export const name="codepen-logo";
export const id="dl_39b8fc17860c409aae33";
export const url=new URL("../icons/codepen-logo.svg?v=d30ff0a1f3612974c00a448e3350d87085cda08209184a2173b82ff360e454ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
