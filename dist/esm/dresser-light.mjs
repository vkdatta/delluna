export const name="dresser-light";
export const id="dl_a980923f43814ec793d4";
export const url=new URL("../icons/dresser-light.svg?v=e69d4ed2169b46215c8a25fd018b4ff32f86c8ff94dd1e65a938af4e6f4b45c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
