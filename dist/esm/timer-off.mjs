export const name="timer-off";
export const id="dl_ea685f37361d4a65abe7";
export const url=new URL("../icons/timer-off.svg?v=b71a4a728cc927c074e8d3ba810f17c8512d8468f425fdf600fd49872661cc42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
