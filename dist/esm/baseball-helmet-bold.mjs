export const name="baseball-helmet-bold";
export const id="dl_4d556c7e345f472ca427";
export const url=new URL("../icons/baseball-helmet-bold.svg?v=f0c4dec99bc8502246f69537854b0336b8753b1ad7bea36f9f72e8cdfee93458",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
