export const name="reddit-logo-thin";
export const id="dl_edadc7b2b3bd411da2fc";
export const url=new URL("../icons/reddit-logo-thin.svg?v=4f155c612d3e86937eebba8f7526be872b3ffdffd014edbc7df2ce35cc53bb38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
