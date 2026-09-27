export const name="forward_circle";
export const id="dl_21f430fc2f782232d79c";
export const url=new URL("../icons/forward_circle.svg?v=8a26702dd66302871064cfb5108a13025c75cf6eadb607a09598e146e3ecf7a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
