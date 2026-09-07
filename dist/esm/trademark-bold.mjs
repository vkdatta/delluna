export const name="trademark-bold";
export const id="dl_26729ffb587248069110";
export const url=new URL("../icons/T/trademark-bold.svg?v=a57c3777c95cfab2b2dfe875fe94e5f8ceb517f9e05b441174b23aaade281bf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
