export const name="bathroom-fill";
export const id="dl_8e852820c588c7232c84";
export const url=new URL("../icons/bathroom-fill.svg?v=61480de9f2043c471ce337e0245803a67bb0466a7a1b1a320c3234f2cd8c0698",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
