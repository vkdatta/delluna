export const name="line_curve";
export const id="dl_2ef1b53297065dfe0a6f";
export const url=new URL("../icons/line_curve.svg?v=15f229d8d33f277aebd2a4fabf7043b192995916dc4dbb975007308001b7fa99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
