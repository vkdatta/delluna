export const name="ping-pong-bold";
export const id="dl_1ac90ac3326649c988b0";
export const url=new URL("../icons/ping-pong-bold.svg?v=a0ef33e84831bceca8c8e806aa5d95fd776e0617e59e066feeb000d864ad7cdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
