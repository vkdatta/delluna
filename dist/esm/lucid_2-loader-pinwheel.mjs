export const name="lucid_2-loader-pinwheel";
export const id="dl_ef4d844ddb1f49d29e34";
export const url=new URL("../icons/lucid_2-loader-pinwheel.svg?v=5bac2a347ad8bdb41af10050398b22f2661933d6a66bddcbf84dfc3aa94cca33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
