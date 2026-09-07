export const name="tennis-ball-fill";
export const id="dl_5050a5049058423e84d1";
export const url=new URL("../icons/T/tennis-ball-fill.svg?v=f2f3bf2a4b14c0bd49d283e26ebe5cfc5e3ec08eb8d95d35fe192a65a0228a70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
