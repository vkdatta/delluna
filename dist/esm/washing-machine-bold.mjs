export const name="washing-machine-bold";
export const id="dl_4a3c5e0902ea98541c92";
export const url=new URL("../icons/washing-machine-bold.svg?v=61ceddeed98a562c55646a19dca0d23868b767ca5cb90b0cc87fc1b83cfdb4d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
