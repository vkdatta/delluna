export const name="lucid_1-brush";
export const id="dl_b9f79d7064d3489ba9a4";
export const url=new URL("../icons/lucid_1-brush.svg?v=41ede813f9c67471863a5f752927990a53d494ac4f62606e18c81512bbb2211f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
