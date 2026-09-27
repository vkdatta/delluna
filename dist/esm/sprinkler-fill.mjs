export const name="sprinkler-fill";
export const id="dl_4ef00ff525649b1cbf3e";
export const url=new URL("../icons/sprinkler-fill.svg?v=c98fed075b95d87c9d895ca21133e654dfb9b6fe67947f8e91d94a5692107753",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
