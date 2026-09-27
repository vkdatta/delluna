export const name="cube-focus-bold";
export const id="dl_48bca7037ea4443696a1";
export const url=new URL("../icons/cube-focus-bold.svg?v=0002bbc69aece401b48664e8f5c32d92e61852043b1d9d646f60c14b64796343",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
