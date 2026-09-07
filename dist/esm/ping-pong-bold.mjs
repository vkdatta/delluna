export const name="ping-pong-bold";
export const id="dl_1ac90ac3326649c988b0";
export const url=new URL("../icons/ping-pong-bold.svg?v=4429e33fcd82ca748117a19df58edc8ba11a6f0faace13b3e6cb18334590c0f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
