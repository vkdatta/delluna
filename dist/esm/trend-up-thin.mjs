export const name="trend-up-thin";
export const id="dl_a56bb1083b8c113b25d2";
export const url=new URL("../icons/trend-up-thin.svg?v=4afcd4befdb244a73c2029c3fd46278d872a47d632abd9a7173f266c36a38b77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
