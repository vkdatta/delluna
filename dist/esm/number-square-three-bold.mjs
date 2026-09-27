export const name="number-square-three-bold";
export const id="dl_b4551b19875048c1a6c3";
export const url=new URL("../icons/number-square-three-bold.svg?v=497e871ebc721e2bed66396beb4104e280679b4515541bb1d2e85bccb6f5a0ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
