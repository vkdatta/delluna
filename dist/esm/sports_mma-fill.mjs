export const name="sports_mma-fill";
export const id="dl_d89e70a9cb6b9f7f3f3d";
export const url=new URL("../icons/sports_mma-fill.svg?v=372e5808445fd93eb26143019b8e40fffb8717bf8aaebe26669704c2d071b770",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
