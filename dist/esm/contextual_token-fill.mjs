export const name="contextual_token-fill";
export const id="dl_53d6ba8c5da7e6842210";
export const url=new URL("../icons/contextual_token-fill.svg?v=39c7f428f16d3a279b924a8cf149abdd614d4efbfba1949927bb8df31a12ce15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
