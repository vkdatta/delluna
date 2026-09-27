export const name="physical_therapy";
export const id="dl_23c46af181f6ecf407a8";
export const url=new URL("../icons/physical_therapy.svg?v=cc10b93db47b7b2386a913149169e8e0d68cac4b1332dbd85713fade501f2584",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
