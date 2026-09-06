export const name="music-note-light";
export const id="dl_5bafdcbd2e044a62bdfe";
export const url=new URL("../icons/music-note-light.svg?v=d3b3f44956c5a1cccf29af1a6eaecaa0adfeb87ac96e85aa6409f5694874b752",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
