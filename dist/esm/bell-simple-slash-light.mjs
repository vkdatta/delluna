export const name="bell-simple-slash-light";
export const id="dl_013abc0106144d6193bf";
export const url=new URL("../icons/bell-simple-slash-light.svg?v=c01b329320cefdf69f0a68e30653b12ef50cda108fb12b62134bab6784791cce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
