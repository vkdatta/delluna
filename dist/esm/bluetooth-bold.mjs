export const name="bluetooth-bold";
export const id="dl_a182070cefc7464590a9";
export const url=new URL("../icons/bluetooth-bold.svg?v=17bb445737a8223a1bc34f4dfb62c5113e66b1a9cf19659dbaa0c4cb8bfc62a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
