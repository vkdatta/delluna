export const name="lucid_3-square-arrow-down-left";
export const id="dl_d1c4614b7f2c4f699d77";
export const url=new URL("../icons/lucid_3-square-arrow-down-left.svg?v=4c22c6569aee88c348302b179c9517e873ca4e08453edf7de4bacfa21a9b0988",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
