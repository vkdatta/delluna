export const name="cognition_2";
export const id="dl_834b339b5e82cd8c6f46";
export const url=new URL("../icons/cognition_2.svg?v=2e96ea5833df95dc27e63ba714563f49c627b1e0628d5eb7c8182155ea6a2a7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
