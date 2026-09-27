export const name="join_left";
export const id="dl_dd565e083948c8eb7a26";
export const url=new URL("../icons/join_left.svg?v=7073de773d0a2fa361a4b770b66844f5f0af3afa86f33a02d13100743de7b731",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
