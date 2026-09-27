export const name="spinner-gap-thin";
export const id="dl_77290f030006795f02f2";
export const url=new URL("../icons/spinner-gap-thin.svg?v=d21a67b63e794c31c1b413525f8e190a5ffdb3c8371e411b8e3d51e3bfad2574",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
