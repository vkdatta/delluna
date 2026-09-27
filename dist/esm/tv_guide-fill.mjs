export const name="tv_guide-fill";
export const id="dl_6af338df557713d6a4dd";
export const url=new URL("../icons/tv_guide-fill.svg?v=3e76ee1b2e4558bdd38baef4550d0f58eccd39eb4df8f465111307bab64200c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
