export const name="match_case-fill";
export const id="dl_fc57978881b5451121da";
export const url=new URL("../icons/match_case-fill.svg?v=f360cbd5680e1a3e894b584faceba271e6d149721537f17e7bffde28c88bf788",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
