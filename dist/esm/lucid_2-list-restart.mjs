export const name="lucid_2-list-restart";
export const id="dl_91197a3949e24a99b713";
export const url=new URL("../icons/lucid_2-list-restart.svg?v=70f7c4f458304cb0da75461544873cf179c4fdbf02df6ce6dc1b86ff99d966a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
