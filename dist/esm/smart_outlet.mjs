export const name="smart_outlet";
export const id="dl_3d1e495b0eab8ea77a2c";
export const url=new URL("../icons/smart_outlet.svg?v=ecdf6d406259528936eec564528b615e77b0bdd1c98180006edb90884b99aded",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
