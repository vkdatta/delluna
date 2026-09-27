export const name="syringe-thin";
export const id="dl_84ef7b1b1ababc8ad937";
export const url=new URL("../icons/syringe-thin.svg?v=a2f62a88da83d638ceba45020a159939344be4062f8f21abb133450bd77f3aa7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
