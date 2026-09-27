export const name="spinner";
export const id="dl_c62650bfc1e9ceb10bdf";
export const url=new URL("../icons/spinner.svg?v=dc3b86a378553105fcaa07bc2bcfbbdce7560c2118714c8a34355e7fcbc577c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
