export const name="flutter-fill";
export const id="dl_7c7f88b6f5381253d8e8";
export const url=new URL("../icons/flutter-fill.svg?v=30c3b9b1172b369118f127fc0c1c5d5f0f2149b9d74574209772a1b59e781669",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
