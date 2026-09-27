export const name="scoreboard-fill";
export const id="dl_576e62169047562d4f06";
export const url=new URL("../icons/scoreboard-fill.svg?v=86b257c987159a3b4a0d65084dbfb741598816891f4310b6dfe7cd7afe704a3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
