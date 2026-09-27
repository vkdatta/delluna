export const name="lucid_3-rectangle-ellipsis";
export const id="dl_4aeb35f4037e4cec93d5";
export const url=new URL("../icons/lucid_3-rectangle-ellipsis.svg?v=5104240a243b7e6b81ef5b3a54c699c035ce1abc5d3aee371dcc0024074d1e4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
