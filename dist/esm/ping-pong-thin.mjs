export const name="ping-pong-thin";
export const id="dl_320153766cfb41da92f1";
export const url=new URL("../icons/ping-pong-thin.svg?v=7aa6ce3d0828f81fde50090314615aa45842400ef614f4930e0280319f59a614",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
