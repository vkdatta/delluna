export const name="square-half-bottom-thin";
export const id="dl_06bfebb603c8f6ca96ef";
export const url=new URL("../icons/square-half-bottom-thin.svg?v=d011b96664ce1d4e2c7d93e4165cd2506aae5d3db504ca61cdae9716f1a0ceea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
