export const name="git-diff";
export const id="dl_a1588c6899e74fbc8f4d";
export const url=new URL("../icons/git-diff.svg?v=002c0949cea617e9ebb3e8bb4ceea2cb9a044c80917279c2c870dc2944c862ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
