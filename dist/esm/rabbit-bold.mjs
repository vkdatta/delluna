export const name="rabbit-bold";
export const id="dl_afbd7c3ed6a24b47884e";
export const url=new URL("../icons/rabbit-bold.svg?v=0e2299f9077ccb7c62f344879a22380f9b4bd786388b9e79e8ffd6bad304a9eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
