export const name="view";
export const id="dl_ce8c287c03854bcd8c82";
export const url=new URL("../icons/view.svg?v=c8222025cd149fe8a86a28a6b1ef3629314d045430c2131d048766bc8a7c23a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
