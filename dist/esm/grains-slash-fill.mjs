export const name="grains-slash-fill";
export const id="dl_6edd05994a6c477bb6bd";
export const url=new URL("../icons/grains-slash-fill.svg?v=8200cbee6f894f1a8ef5ae31ff92cd14e2a3ac64c0e89fe434f84bd15dea30d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
