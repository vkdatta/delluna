export const name="vertical_split-fill";
export const id="dl_51040ca95de31c5a9052";
export const url=new URL("../icons/vertical_split-fill.svg?v=215f1d4804cb3571078c9cc59b6f2d4caf2567031667615b6030dc0cbe72d3ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
