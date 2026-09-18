export const name="play_circle-fill";
export const id="dl_2cb4a7bb0ca7460cbafc";
export const url=new URL("../icons/play_circle-fill.svg?v=e3a085fa7f0610ef19e2f3842dba327da184bb8e8f834c20f5d7821eefb3db08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
