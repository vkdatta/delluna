export const name="microscope-fill";
export const id="dl_4bffb4a55e6a4b0781ac";
export const url=new URL("../icons/microscope-fill.svg?v=63df1353c092b5c552a57b26a176ba4b4b1992feaba5057decc2f3a88eb51f22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
