export const name="hard-drives-bold";
export const id="dl_659b59510dc44f849225";
export const url=new URL("../icons/hard-drives-bold.svg?v=4b5d579acf8552d6d15391177ec6b066b9ec1978f7b519f18718f2732862c23b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
