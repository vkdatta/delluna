export const name="airplay";
export const id="dl_59ce340af6754e1fb3ab";
export const url=new URL("../icons/airplay.svg?v=09b6308d3b2a4dffcfbc18e9ccadb54da63f2681a3e0c5ac53d46cec1eb37f52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
