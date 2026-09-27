export const name="draw_abstract";
export const id="dl_f2332c58cd5bd01b57b2";
export const url=new URL("../icons/draw_abstract.svg?v=ac7e1204033b3e89547dbbad81587d502dea3c1d96f578b5752326b0dab9e6a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
