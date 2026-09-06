export const name="intersect-thin";
export const id="dl_ae52b1a1444c4215b674";
export const url=new URL("../icons/intersect-thin.svg?v=0277b61f74a8025fc8f355b7834d64ec2ba6a92295aff462ebefe9155f1df213",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
