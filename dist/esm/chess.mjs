export const name="chess";
export const id="dl_b1fb585470eee9593faa";
export const url=new URL("../icons/chess.svg?v=89b06a27d1fbfdc9ed001107618e482a6bfada3fa01fe14842461b9203fa6e3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
