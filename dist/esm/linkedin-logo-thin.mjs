export const name="linkedin-logo-thin";
export const id="dl_351c81e8db95466fb66a";
export const url=new URL("../icons/linkedin-logo-thin.svg?v=fd61b73f6e411e40b04fe56da3d77bd1fef413a9e0f4011c994e03c7af963074",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
