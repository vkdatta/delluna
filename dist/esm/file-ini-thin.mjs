export const name="file-ini-thin";
export const id="dl_fd66f614afb644e2ba56";
export const url=new URL("../icons/file-ini-thin.svg?v=22db85fe9b767a247c7b2b1dc56f861843b61d666be4781fc48b2f617a7fb18d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
