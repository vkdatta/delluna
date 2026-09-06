export const name="lucid_2-line-squiggle";
export const id="dl_a377549f4b2441b4b278";
export const url=new URL("../icons/lucid_2-line-squiggle.svg?v=3484f341c9cdcc3a3f9fc4482f5b98e51db90aad99261f85745f2b6287c8c875",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
