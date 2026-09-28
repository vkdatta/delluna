export const name="free_cancellation-fill";
export const id="dl_ed6df54ea95bb5a7b0a5";
export const url=new URL("../icons/free_cancellation-fill.svg?v=e454540627240d46dc0181a7bc71d3389d38a7d46467e6b19f0e5da1997c5e3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
