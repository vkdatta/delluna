export const name="tv_with_assistant-fill";
export const id="dl_146e0762eeb1dd8a1200";
export const url=new URL("../icons/tv_with_assistant-fill.svg?v=b33d300176c5ac10034aa412073ef4706d926db4cdaef51d43ea2113ef08d38e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
