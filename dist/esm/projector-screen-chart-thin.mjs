export const name="projector-screen-chart-thin";
export const id="dl_f090118028f64bdaaf9f";
export const url=new URL("../icons/projector-screen-chart-thin.svg?v=cc4de0faf2b627226c90ce443e1a221c9daad35a0008c61f303ebf15de9d3a61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
