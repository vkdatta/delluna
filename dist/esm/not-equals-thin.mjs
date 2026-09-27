export const name="not-equals-thin";
export const id="dl_95f63ffc6d6c4a11bb81";
export const url=new URL("../icons/not-equals-thin.svg?v=389c61d1f320f1334ea499a16820c36531511edf26d3872cd5c3d52176c66f19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
