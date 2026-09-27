export const name="strategy-fill";
export const id="dl_a5eb2fc6f1c87ef1decd";
export const url=new URL("../icons/strategy-fill.svg?v=9a4444731a7fcbba6aab46813796a84e4cbdc7289bada0e2504b76fd48f1b669",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
