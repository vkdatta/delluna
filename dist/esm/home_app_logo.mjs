export const name="home_app_logo";
export const id="dl_356c4ed840a47771660d";
export const url=new URL("../icons/home_app_logo.svg?v=377ebd7cd38072f5bb2d831d2d3d1208dba10d91c258c8a80f76b0b9ba2cc270",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
