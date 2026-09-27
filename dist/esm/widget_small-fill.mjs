export const name="widget_small-fill";
export const id="dl_ce79a93b84ed8084d881";
export const url=new URL("../icons/widget_small-fill.svg?v=43d31db43bd5b5b3bc943b53f9f04c75fa131568cd084277d5ce8438ffff81f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
