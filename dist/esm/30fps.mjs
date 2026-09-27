export const name="30fps";
export const id="dl_44c503e48ef9a816b5fd";
export const url=new URL("../icons/30fps.svg?v=f3ca9846d3cc3ef48a2807a68bf44c49537ea6c0fb629243d1480b82ef7f6e86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
