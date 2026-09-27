export const name="cognition";
export const id="dl_b6c97d7ef8703118f7be";
export const url=new URL("../icons/cognition.svg?v=32180b3286fa088c8744a068621959ab0c50849f5b5919ac87c97819cb3281c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
