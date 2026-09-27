export const name="title";
export const id="dl_4ba63f65d2a3037e0d42";
export const url=new URL("../icons/title.svg?v=4049d1ddcd103c99b745fc6e7d6bb21d364c438c964dda6e9582b0572a011621",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
