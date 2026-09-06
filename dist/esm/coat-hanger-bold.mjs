export const name="coat-hanger-bold";
export const id="dl_b2d8400307f74b9eab34";
export const url=new URL("../icons/coat-hanger-bold.svg?v=42a83f1408b895513a094acfa1658950125499ae7298437f17ff8eff88c899be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
