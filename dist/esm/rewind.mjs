export const name="rewind";
export const id="dl_69b970f927cd48f1b624";
export const url=new URL("../icons/rewind.svg?v=d3cf73afba647ee272b2898836089b3e5d55633840906f3ce335c9c24ecb7a23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
