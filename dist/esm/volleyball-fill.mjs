export const name="volleyball-fill";
export const id="dl_2c71230bba4921e1995e";
export const url=new URL("../icons/volleyball-fill.svg?v=b94603f5d755373845e08ce60d4b7a374ca77cc7cbf58095a036e75657c2eac6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
