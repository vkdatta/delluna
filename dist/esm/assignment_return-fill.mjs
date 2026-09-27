export const name="assignment_return-fill";
export const id="dl_b9471276c1c6f6e44e5b";
export const url=new URL("../icons/assignment_return-fill.svg?v=508abc910d62002b43c30afbbc8fc4810f59edfb1487f7f43b054149330e7320",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
