export const name="flag-banner-thin";
export const id="dl_ceec6c393d6741f49918";
export const url=new URL("../icons/flag-banner-thin.svg?v=eaf34249df3f538d8b60f771d39eec99be9fa731ca6586d94be66f2eec26dedc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
