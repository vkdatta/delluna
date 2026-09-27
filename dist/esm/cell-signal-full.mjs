export const name="cell-signal-full";
export const id="dl_979151ad67704910a488";
export const url=new URL("../icons/cell-signal-full.svg?v=b948639eea2de5af885698aa51a0422aa102c33cba02c8eb1f1f48be6ff57851",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
