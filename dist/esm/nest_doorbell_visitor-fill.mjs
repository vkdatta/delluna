export const name="nest_doorbell_visitor-fill";
export const id="dl_069b5e6163eed4146681";
export const url=new URL("../icons/nest_doorbell_visitor-fill.svg?v=fecc7f76965e269a56b7b1aff6107a86e596ba29582e556083ce93673652e150",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
