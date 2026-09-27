export const name="clipboard-light";
export const id="dl_be75e0eedc634e5da4b0";
export const url=new URL("../icons/clipboard-light.svg?v=5b494787ef5f1466e4929569ce38b59553d7a9ed31f5ed3dbfef5854063fa0eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
