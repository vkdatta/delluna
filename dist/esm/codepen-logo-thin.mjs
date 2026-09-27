export const name="codepen-logo-thin";
export const id="dl_fed36a5c991c4be29785";
export const url=new URL("../icons/codepen-logo-thin.svg?v=67bc40958a12fe7595b2a99f1ae1649fcbb643091a7ab671ca07d75859449e30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
