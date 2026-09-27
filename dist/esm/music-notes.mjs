export const name="music-notes";
export const id="dl_b1a43de47f8441c2a833";
export const url=new URL("../icons/music-notes.svg?v=b6a18c13cf5a4d427377923c1a8464a5d3706a97a737cafbab7a3e92a5580a68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
