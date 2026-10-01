export const name="user-gear-thin";
export const id="dl_3f564b9133830a917fa4";
export const url=new URL("../icons/user-gear-thin.svg?v=288359b7489432370f6eaed71dff16fa0a4cb05ee443c83e1152b07301872e00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
