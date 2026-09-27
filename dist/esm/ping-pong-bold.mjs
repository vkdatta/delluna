export const name="ping-pong-bold";
export const id="dl_1ac90ac3326649c988b0";
export const url=new URL("../icons/ping-pong-bold.svg?v=ad72f986d91d5e4b387cd4ba35e016793313dc1edd5732def5a8ee1ab9112839",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
