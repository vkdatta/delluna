export const name="chips";
export const id="dl_ec5217849a104d14c323";
export const url=new URL("../icons/chips.svg?v=db5b0953c45cdfd349dbe658876894f1294a91dc56e193b10003066ab28eef69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
