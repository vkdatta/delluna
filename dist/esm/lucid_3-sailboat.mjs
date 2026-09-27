export const name="lucid_3-sailboat";
export const id="dl_a7564e1b67d84cb6befc";
export const url=new URL("../icons/lucid_3-sailboat.svg?v=fd7e37b989a4ea926a304b8ccbbbed7b9b22ff482fbf367ecfcb9f018d8bd7c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
