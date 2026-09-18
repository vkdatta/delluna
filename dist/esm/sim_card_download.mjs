export const name="sim_card_download";
export const id="dl_4edf63122b184d39b933";
export const url=new URL("../icons/sim_card_download.svg?v=1b4ec1814c940ac8a722732589634e60112ce2d12089ad75cc6b73d3eeacc732",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
