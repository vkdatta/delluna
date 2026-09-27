export const name="trend-up-duotone";
export const id="dl_d0014633658abb55728e";
export const url=new URL("../icons/trend-up-duotone.svg?v=a68a12f2e962fadd4921dd34b7884b69b9c782689a5ab156d9c2fe613c54610e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
