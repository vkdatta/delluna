export const name="app-store-logo-light";
export const id="dl_383ceed7d90740c38ef6";
export const url=new URL("../icons/app-store-logo-light.svg?v=f34e424044e7a6ec9fea22d168da9720d9b15de71ff560726818ab07191da037",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
