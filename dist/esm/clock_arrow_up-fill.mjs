export const name="clock_arrow_up-fill";
export const id="dl_5b2e9a92d92fb7766fa0";
export const url=new URL("../icons/clock_arrow_up-fill.svg?v=0c329dc0c36dff1c4063f2b1ac20d06a71969939eac3fb9098a221c4acc85195",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
