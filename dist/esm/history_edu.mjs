export const name="history_edu";
export const id="dl_a8d47d48bd664a8e8782";
export const url=new URL("../icons/H/history_edu.svg?v=c1507b3ec552626f859198dae20caf13177633a823d38aeb790a55d6bdf2190e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
