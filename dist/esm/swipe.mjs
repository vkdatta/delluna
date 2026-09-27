export const name="swipe";
export const id="dl_744cb642ce2911244c76";
export const url=new URL("../icons/swipe.svg?v=c521d462641ef5cd129ad4aa7a260207f7f9bb732263eb6a633e199e85809045",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
