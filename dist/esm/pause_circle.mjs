export const name="pause_circle";
export const id="dl_f230fb645ae5360155b3";
export const url=new URL("../icons/pause_circle.svg?v=017e7424e666688ca816e7ac17baafb4396323b4866c4e31522cd5225eadbe79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
