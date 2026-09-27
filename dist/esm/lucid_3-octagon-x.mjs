export const name="lucid_3-octagon-x";
export const id="dl_970e7561ec024b5faac7";
export const url=new URL("../icons/lucid_3-octagon-x.svg?v=084f58a20cbc08bde540e4e2c45241885dbf769d72bddbbaa3677243548075dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
