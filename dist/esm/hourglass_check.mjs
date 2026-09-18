export const name="hourglass_check";
export const id="dl_425f659fef454bf3910f";
export const url=new URL("../icons/hourglass_check.svg?v=19a6a443c69fc2aa6114e1583414b5121ea0dbc05761ccea7902bfe603d41e90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
