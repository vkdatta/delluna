export const name="plane_contrails";
export const id="dl_a3e453358a77513a0bf2";
export const url=new URL("../icons/plane_contrails.svg?v=2e905d9b354f18f20467a70c1a6dc82e043bc42fcf7bb33557a62fcad8c30474",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
