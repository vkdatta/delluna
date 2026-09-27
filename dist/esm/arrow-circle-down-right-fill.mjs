export const name="arrow-circle-down-right-fill";
export const id="dl_9911aa438d444fb2bcbe";
export const url=new URL("../icons/arrow-circle-down-right-fill.svg?v=d62c7314fa88c70ef3387fa4bc8dc38de5a9422451ebeb885d738e885931bb88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
