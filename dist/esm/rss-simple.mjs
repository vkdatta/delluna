export const name="rss-simple";
export const id="dl_2637bf86a9084fa095b5";
export const url=new URL("../icons/rss-simple.svg?v=1a336a035000db9016a0b4382f3e08ad3fafecab72be0f8aadf94648cf75dd93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
