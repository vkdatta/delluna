export const name="timer_play-fill";
export const id="dl_1db7f239db52b3926305";
export const url=new URL("../icons/timer_play-fill.svg?v=f6e4f5f2d6138f5177dd4e44a5fbb6d50b07a17efdfe468d9bd702b3a97b0925",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
