export const name="text-h-five-thin";
export const id="dl_87e2649946904fd59c40";
export const url=new URL("../icons/T/text-h-five-thin.svg?v=972e452e2f9eb695810ebd31da62085016388e2241611f3f7d3de5e6296ddcb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
