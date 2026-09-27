export const name="highlighter-bold";
export const id="dl_c2d6458ea00a4ff58b46";
export const url=new URL("../icons/highlighter-bold.svg?v=54d59c1cb6a201e8b5d7240fc78defb5e63894d79fc3a935b14ed18fe66a1ff7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
