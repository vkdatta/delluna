export const name="timer-light";
export const id="dl_b65a28a4c0717a617589";
export const url=new URL("../icons/timer-light.svg?v=854b87c8a21d45f6e1d427a76ceffe1d6b9279adfdd644bf77889fbfe8b7d3a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
