export const name="assistant_on_hub-fill";
export const id="dl_71f7b68f70268767059d";
export const url=new URL("../icons/assistant_on_hub-fill.svg?v=d30f21eda8eedfb053f405709ae72e5fdec9cc20ed4dc21ae3b8ab11d31371ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
