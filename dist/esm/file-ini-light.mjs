export const name="file-ini-light";
export const id="dl_d2d867c741a84ef1a08a";
export const url=new URL("../icons/file-ini-light.svg?v=58159e1d32622c413390b30b1102211aea4f7ef9d56d2bb3ee9541f330f38d0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
