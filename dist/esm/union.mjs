export const name="union";
export const id="dl_485eba520a088832dce4";
export const url=new URL("../icons/union.svg?v=a79618c260be4a8ebb4391cde23db23b17084e4ce5d2952b3329784f77f42c92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
