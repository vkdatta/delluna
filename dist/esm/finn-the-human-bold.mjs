export const name="finn-the-human-bold";
export const id="dl_63ce9c51e2114c32a6a3";
export const url=new URL("../icons/finn-the-human-bold.svg?v=ba7e931c7c5c207f994d097682b0ad99b4bb95c734f63408e9a183ca40e2803d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
