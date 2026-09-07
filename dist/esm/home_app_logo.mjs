export const name="home_app_logo";
export const id="dl_356c4ed840a47771660d";
export const url=new URL("../icons/home_app_logo.svg?v=16801477234ef7bb5deea423141787ad942f12af183474c2b6c17ba55ee6726c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
