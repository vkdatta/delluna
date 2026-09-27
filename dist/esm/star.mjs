export const name="star";
export const id="dl_3eea1d58292990eebbc6";
export const url=new URL("../icons/star.svg?v=7cc3c1d1b328bf30d739be8ad13c67a5791b4fdb7822d7027b0566ad3ee68590",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
