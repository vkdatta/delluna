export const name="cognition";
export const id="dl_2e03256052ff43139939";
export const url=new URL("../icons/C/cognition.svg?v=6119d37440043803ab07c58643950714b28014716e30f2d622de40d07bde1ef3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
