export const name="church-thin";
export const id="dl_12d82c272c14428fa44e";
export const url=new URL("../icons/church-thin.svg?v=d959fa2bf85404a46d49e2771bec6d0a51e5b079788880b2d6be1e74c07699e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
