export const name="lucid_2-list-ordered";
export const id="dl_a50e8ee24484481880cc";
export const url=new URL("../icons/lucid_2-list-ordered.svg?v=2485bdd77087689253360a729dc80b9153e05240c06164d41acbb35da534af87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
