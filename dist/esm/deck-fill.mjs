export const name="deck-fill";
export const id="dl_beb36961914b3e8ba7dd";
export const url=new URL("../icons/deck-fill.svg?v=9cfde9aa4b25a9a53a3bd0ac6a96757d2cb56eda562518214bca5b73e9bdbbcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
