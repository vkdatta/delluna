export const name="bell-simple-light";
export const id="dl_d33c2eae36ae43e8874a";
export const url=new URL("../icons/bell-simple-light.svg?v=065e988ffda1e492f21ca95999c7ddc142e989292457f76ccadd4b4bb3ade744",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
