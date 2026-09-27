export const name="supervised_user_circle";
export const id="dl_e83ebe6c6ba2d049a720";
export const url=new URL("../icons/supervised_user_circle.svg?v=34d35b2e8c0a65e89f16b77ea0a7a41af70e9f8b99c9d23d4b53ae9201c5fa4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
