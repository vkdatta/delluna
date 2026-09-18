export const name="home-fill";
export const id="dl_beb09a65ff2248358999";
export const url=new URL("../icons/home-fill.svg?v=d979b84b0808d7d6384089416a639f67971ca6c2909ef07039a65d53368813ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
