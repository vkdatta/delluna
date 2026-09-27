export const name="graph";
export const id="dl_11ed3b4dfa9d4a80827c";
export const url=new URL("../icons/graph.svg?v=351e2341e6274961da18d6758516d7467201ab8f86e96e9e50fe89c8936e0f58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
