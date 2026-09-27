export const name="football-helmet";
export const id="dl_a282dbced9b740cea3d7";
export const url=new URL("../icons/football-helmet.svg?v=054c998c8289dd64d13a52b2345c6b4ae5b7782363230761dbc90034f7a32db8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
