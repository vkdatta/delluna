export const name="hexagon";
export const id="dl_8c53195de07547b282bb";
export const url=new URL("../icons/hexagon.svg?v=65dc4fc79c65da10bff92d0526a422af80f7a02affc197082c26135164fb1555",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
