export const name="lucid_2-flask-round";
export const id="dl_2d69895fa12043a0aa13";
export const url=new URL("../icons/lucid_2-flask-round.svg?v=77a9b76f6e0683daa70560be6db39eaba6607ce8a27bc565c34556c0c413b591",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
