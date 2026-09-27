export const name="network_check-fill";
export const id="dl_1e5a604541a4fc0192bb";
export const url=new URL("../icons/network_check-fill.svg?v=8a05c5a7baa2927df575698e76db85b1e8882bffef5b15e2d94c0906a24f17d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
