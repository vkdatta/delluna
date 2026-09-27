export const name="sports_volleyball";
export const id="dl_769fd382fbd724a73de4";
export const url=new URL("../icons/sports_volleyball.svg?v=838258acc5150c0513d66efcb4419e9a0bd627b119a117f65e8d31571a7da003",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
