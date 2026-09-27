export const name="18_up_rating";
export const id="dl_b9f45eacc8bd68976606";
export const url=new URL("../icons/18_up_rating.svg?v=28ba655a3db3eea1527eadb34fb97f783639e5a0f07907dfa7cd883a360098bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
