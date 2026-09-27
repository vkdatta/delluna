export const name="megaphone-thin";
export const id="dl_38d0f6ab76414155a24f";
export const url=new URL("../icons/megaphone-thin.svg?v=79c84d6e4ef80202a37becf117fc982856352561aa672ca38d28d0ee6268b92f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
