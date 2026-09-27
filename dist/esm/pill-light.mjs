export const name="pill-light";
export const id="dl_f0933ad011044e89ad0e";
export const url=new URL("../icons/pill-light.svg?v=effd6d1182abd1547ec225cd544e91cf979fd3eb6963c1436bb6e49e304f4987",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
