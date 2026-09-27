export const name="flip-horizontal";
export const id="dl_76882969591e49cfb450";
export const url=new URL("../icons/flip-horizontal.svg?v=21f91b7de6bfc57a76c0b680006ee55b6d802ed28aa05e53fe1f3739323afd34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
