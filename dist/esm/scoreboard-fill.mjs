export const name="scoreboard-fill";
export const id="dl_2be4f23c8357f9ee99bd";
export const url=new URL("../icons/scoreboard-fill.svg?v=4bdb39a04150cfbf2fc2eb7d219be429a5513bf5238e5267df9ff5b1cd73b20e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
