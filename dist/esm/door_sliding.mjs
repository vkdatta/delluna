export const name="door_sliding";
export const id="dl_39bbd934edbfe9b4367c";
export const url=new URL("../icons/door_sliding.svg?v=df936e79d4b33832e7ea17dd02abab7965c85478436749ea1e11fb7304243050",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
