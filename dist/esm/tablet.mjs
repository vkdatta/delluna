export const name="tablet";
export const id="dl_bc36c5e8381e4ed3beed";
export const url=new URL("../icons/tablet.svg?v=6c7cbdf3fcae7cdf68057677567a7b98d0d2c65dff9b2528adf215045e2eb2b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
