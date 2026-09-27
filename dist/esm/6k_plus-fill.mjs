export const name="6k_plus-fill";
export const id="dl_e7cc46c9a53206216afa";
export const url=new URL("../icons/6k_plus-fill.svg?v=56e771abd95b93fc29821663b27d40ecce0e520e38ca661aac8bc3ae02872e9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
