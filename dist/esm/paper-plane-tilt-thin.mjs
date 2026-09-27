export const name="paper-plane-tilt-thin";
export const id="dl_93dcd0ec15164cbc8b0e";
export const url=new URL("../icons/paper-plane-tilt-thin.svg?v=2b8c1f690d5ae1b2456ad882b23901aa0710d0784bc07587fce2c451126b74df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
