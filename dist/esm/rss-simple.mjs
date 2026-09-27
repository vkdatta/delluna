export const name="rss-simple";
export const id="dl_2637bf86a9084fa095b5";
export const url=new URL("../icons/rss-simple.svg?v=4ccc1c11b5770342e90e3e8ce43e668c5448dfbe1bdff792a3161001e9739c4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
