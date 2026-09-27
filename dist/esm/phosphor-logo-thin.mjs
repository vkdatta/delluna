export const name="phosphor-logo-thin";
export const id="dl_b4e6f5889cb14696bbca";
export const url=new URL("../icons/phosphor-logo-thin.svg?v=6e99ed372f9b2998427fffb10dd965f880d7a5777379dd86f208c567b1584d47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
