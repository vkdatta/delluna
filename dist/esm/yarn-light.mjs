export const name="yarn-light";
export const id="dl_a22c72abd41435c033a2";
export const url=new URL("../icons/yarn-light.svg?v=1bd62f34252a71efa328269b24843174f31f114a32fa56a2412e770f4d910b25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
