export const name="night_shelter-fill";
export const id="dl_d40e8b44a29a419c4a16";
export const url=new URL("../icons/night_shelter-fill.svg?v=4e153a7df32118f751c88a29a927bb5ac1a47f0f9c8d8592da0a08f025d710a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
