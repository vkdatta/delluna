export const name="parallelogram-thin";
export const id="dl_16189cdf8aa4499b8944";
export const url=new URL("../icons/parallelogram-thin.svg?v=e9401af712b14e6c5510eeaec20c038bf722015e53c766dfd8e9a4cbd3300c3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
