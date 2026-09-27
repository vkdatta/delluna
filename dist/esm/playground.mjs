export const name="playground";
export const id="dl_bfc74c526f8f61ef5183";
export const url=new URL("../icons/playground.svg?v=139e73d8a3b2015416b5a6542c3d09d3f6be96e2285c009adf3e0808374d6660",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
