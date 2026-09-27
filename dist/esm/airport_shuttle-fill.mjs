export const name="airport_shuttle-fill";
export const id="dl_7c61d0a4acbc12e9451d";
export const url=new URL("../icons/airport_shuttle-fill.svg?v=72e1686b504e1b43ad537c783d9dd4ea94c97d3c85bba6069cec4fe78ba710d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
