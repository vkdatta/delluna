export const name="shuffle-bold";
export const id="dl_85e8245e89ff65e1ba12";
export const url=new URL("../icons/shuffle-bold.svg?v=09f09a910b6dd980fc8f393b83771265017066048ba636ac7921da0402215115",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
