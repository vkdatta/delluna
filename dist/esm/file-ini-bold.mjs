export const name="file-ini-bold";
export const id="dl_51352d07ac26499188ca";
export const url=new URL("../icons/file-ini-bold.svg?v=3bb81a9f901810647965a8cceac52b23780df55d2af583d2a6533b86df51fb67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
