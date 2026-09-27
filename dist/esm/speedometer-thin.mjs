export const name="speedometer-thin";
export const id="dl_5b7cd44e5c73ed78677c";
export const url=new URL("../icons/speedometer-thin.svg?v=2ba2c84ed62c4f0a053a660cc2f42dbc37aa12fbd9bad00807b73231e05a346c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
